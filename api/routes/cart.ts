import { Router, Request, Response } from 'express';
import { getSupabaseAdmin, inMemoryDb } from '../services/supabase';

const router = Router();

// Helper: Get cart items for a session or user
function getCartItemsForSession(sessionId: string, userId?: string) {
  return inMemoryDb.cartItems.filter(
    (item) => item.sessionId === sessionId || (userId && item.userId === userId)
  );
}

// 1. GET /api/cart
router.get('/', async (req: Request, res: Response) => {
  try {
    const sessionId = (req.query.sessionId as string) || req.headers['x-session-id'] as string || 'guest_default_session';
    const userId = req.query.userId as string;

    const items = getCartItemsForSession(sessionId, userId);
    let subtotal = 0;
    items.forEach((item) => {
      subtotal += Number(item.price || 0) * Number(item.quantity || 1);
    });

    res.json({
      success: true,
      sessionId: sessionId,
      items: items,
      itemCount: items.reduce((acc, i) => acc + i.quantity, 0),
      subtotal: subtotal,
      currency: 'INR',
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to fetch cart' });
  }
});

// 2. POST /api/cart/add
router.post('/add', async (req: Request, res: Response) => {
  try {
    const { sessionId = 'guest_default_session', userId, productId, title, price, quantity = 1, image, craft } = req.body;

    if (!productId || !title) {
      return res.status(400).json({ error: 'Product ID and title are required' });
    }

    const existingIndex = inMemoryDb.cartItems.findIndex(
      (i) => i.productId === productId && (i.sessionId === sessionId || (userId && i.userId === userId))
    );

    if (existingIndex >= 0) {
      inMemoryDb.cartItems[existingIndex].quantity += Number(quantity);
    } else {
      const newItem = {
        id: `cart_item_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        sessionId: sessionId,
        userId: userId || null,
        productId: productId,
        title: title,
        price: Number(price || 0),
        quantity: Number(quantity),
        image: image || '',
        craft: craft || '',
        addedAt: new Date().toISOString(),
      };
      inMemoryDb.cartItems.push(newItem);
    }

    const updatedItems = getCartItemsForSession(sessionId, userId);
    res.json({
      success: true,
      items: updatedItems,
      itemCount: updatedItems.reduce((acc, i) => acc + i.quantity, 0),
      message: 'Item added to artisanal cart!',
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to add item to cart' });
  }
});

// 3. PUT /api/cart/update
router.put('/update', async (req: Request, res: Response) => {
  try {
    const { sessionId = 'guest_default_session', userId, productId, quantity } = req.body;

    if (!productId || quantity === undefined) {
      return res.status(400).json({ error: 'Product ID and quantity are required' });
    }

    const targetIndex = inMemoryDb.cartItems.findIndex(
      (i) => i.productId === productId && (i.sessionId === sessionId || (userId && i.userId === userId))
    );

    if (targetIndex >= 0) {
      if (Number(quantity) <= 0) {
        inMemoryDb.cartItems.splice(targetIndex, 1);
      } else {
        inMemoryDb.cartItems[targetIndex].quantity = Number(quantity);
      }
    }

    const updatedItems = getCartItemsForSession(sessionId, userId);
    res.json({
      success: true,
      items: updatedItems,
      itemCount: updatedItems.reduce((acc, i) => acc + i.quantity, 0),
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to update cart' });
  }
});

// 4. DELETE /api/cart/remove
router.delete('/remove', async (req: Request, res: Response) => {
  try {
    const { sessionId = 'guest_default_session', userId, productId } = req.body;

    inMemoryDb.cartItems = inMemoryDb.cartItems.filter(
      (i) => !(i.productId === productId && (i.sessionId === sessionId || (userId && i.userId === userId)))
    );

    const updatedItems = getCartItemsForSession(sessionId, userId);
    res.json({
      success: true,
      items: updatedItems,
      itemCount: updatedItems.reduce((acc, i) => acc + i.quantity, 0),
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to remove item' });
  }
});

// 5. DELETE /api/cart/clear
router.delete('/clear', async (req: Request, res: Response) => {
  try {
    const { sessionId = 'guest_default_session', userId } = req.body;

    inMemoryDb.cartItems = inMemoryDb.cartItems.filter(
      (i) => !(i.sessionId === sessionId || (userId && i.userId === userId))
    );

    res.json({ success: true, items: [], itemCount: 0, message: 'Cart cleared' });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to clear cart' });
  }
});

// 6. POST /api/cart/merge
router.post('/merge', async (req: Request, res: Response) => {
  try {
    const { sessionId, userId } = req.body;
    if (!sessionId || !userId) {
      return res.status(400).json({ error: 'sessionId and userId are required to merge' });
    }

    inMemoryDb.cartItems.forEach((item) => {
      if (item.sessionId === sessionId && !item.userId) {
        item.userId = userId;
      }
    });

    const updatedItems = getCartItemsForSession(sessionId, userId);
    res.json({
      success: true,
      items: updatedItems,
      itemCount: updatedItems.reduce((acc, i) => acc + i.quantity, 0),
      message: 'Guest cart merged successfully',
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
