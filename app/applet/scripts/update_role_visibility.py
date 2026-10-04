with open("public/assets/index-v2-aboutphotos.js", "r", encoding="utf-8") as f:
    content = f.read()

pos = content.find("My Profile")
if pos != -1:
    pos_container = content.rfind('className:"space-y-2",children:[', 0, pos)
    pos_end = content.find("]})", pos)
    print("Found container:", content[pos_container:pos_end + 3])

old_block = 'a.jsxs("div",{className:"space-y-2",children:[a.jsxs("button",{type:"button",onClick:()=>{d(!1),p("profile")},className:"w-full py-2.5 px-3 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200 flex items-center justify-between transition-colors cursor-pointer shadow-2xs mb-2",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-sm",children:"👤"}),a.jsx("span",{children:"My Profile"})]}),a.jsx(xc,{className:"w-3.5 h-3.5 text-stone-400"})]}),a.jsxs("button",{type:"button",onClick:()=>{if(window.jbiNavigate)window.jbiNavigate("orders");else p("orders");d(!1);},className:"w-full py-2.5 px-3 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200 flex items-center justify-between transition-colors cursor-pointer shadow-2xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Za,{className:"w-4 h-4 text-stone-600"}),a.jsx("span",{children:"My Orders & Tax Invoices"})]}),a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx("span",{className:"text-[10px] bg-stone-100 px-1.5 py-0.2 rounded font-bold text-stone-600",children:A.length}),a.jsx(xc,{className:"w-3.5 h-3.5 text-stone-400"})]})]}),n.role==="admin"&&a.jsxs("button",{type:"button",onClick:()=>{d(!1),p("admin")},className:"w-full py-2.5 px-3 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg flex items-center justify-between transition-colors cursor-pointer shadow-xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(St,{className:"w-4 h-4 text-amber-300"}),a.jsx("span",{children:"Open Administrator Portal"})]}),a.jsx(xc,{className:"w-3.5 h-3.5 text-stone-400"})]}),a.jsxs("button",{type:"button",onClick:()=>{d(!1),p("shop")},className:"w-full py-2.5 px-3 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200 flex items-center justify-between transition-colors cursor-pointer shadow-2xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(hs,{className:"w-4 h-4 text-rose-500"}),a.jsx("span",{children:"Explore Odisha Collection"})]}),a.jsx(xc,{className:"w-3.5 h-3.5 text-stone-400"})]})]})'

new_block = 'a.jsxs("div",{className:"space-y-2",children:[n.role!=="admin"&&a.jsxs("button",{type:"button",onClick:()=>{d(!1),p("profile")},className:"w-full py-2.5 px-3 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200 flex items-center justify-between transition-colors cursor-pointer shadow-2xs mb-2",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-sm",children:"👤"}),a.jsx("span",{children:"My Profile"})]}),a.jsx(xc,{className:"w-3.5 h-3.5 text-stone-400"})]}),n.role!=="admin"&&a.jsxs("button",{type:"button",onClick:()=>{if(window.jbiNavigate)window.jbiNavigate("orders");else p("orders");d(!1);},className:"w-full py-2.5 px-3 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200 flex items-center justify-between transition-colors cursor-pointer shadow-2xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Za,{className:"w-4 h-4 text-stone-600"}),a.jsx("span",{children:"My Orders & Tax Invoices"})]}),a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx("span",{className:"text-[10px] bg-stone-100 px-1.5 py-0.2 rounded font-bold text-stone-600",children:A.length}),a.jsx(xc,{className:"w-3.5 h-3.5 text-stone-400"})]})]}),n.role==="admin"&&a.jsxs("button",{type:"button",onClick:()=>{d(!1),p("admin")},className:"w-full py-2.5 px-3 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg flex items-center justify-between transition-colors cursor-pointer shadow-xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(St,{className:"w-4 h-4 text-amber-300"}),a.jsx("span",{children:"Open Administrator Portal"})]}),a.jsx(xc,{className:"w-3.5 h-3.5 text-stone-400"})]}),n.role!=="admin"&&a.jsxs("button",{type:"button",onClick:()=>{d(!1),p("shop")},className:"w-full py-2.5 px-3 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200 flex items-center justify-between transition-colors cursor-pointer shadow-2xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(hs,{className:"w-4 h-4 text-rose-500"}),a.jsx("span",{children:"Explore Odisha Collection"})]}),a.jsx(xc,{className:"w-3.5 h-3.5 text-stone-400"})]})]})'

if old_block in content:
    content = content.replace(old_block, new_block)
    print("Replaced dropdown block successfully!")
else:
    print("ERROR: old_block not found in content")

# Mobile nav
mob_old = 'a.jsxs("button",{onClick:()=>{j(!1),p("profile")},className:"block w-full text-left py-1.5 text-xs font-semibold text-stone-800 uppercase tracking-wider",children:"My Profile"}),a.jsxs("button",{onClick:()=>{j(!1);if(window.jbiNavigate)window.jbiNavigate("orders");else p("orders");},className:"block w-full text-left py-1.5 text-xs font-semibold text-stone-800 uppercase tracking-wider",children:"My Orders & Tax Invoices"}),n.role==="admin"&&a.jsx("button",{onClick:()=>{p("admin"),j(!1)},className:"block w-full text-left py-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider",children:"Administrator Portal"})'
mob_new = 'n.role!=="admin"&&a.jsxs("button",{onClick:()=>{j(!1),p("profile")},className:"block w-full text-left py-1.5 text-xs font-semibold text-stone-800 uppercase tracking-wider",children:"My Profile"}),n.role!=="admin"&&a.jsxs("button",{onClick:()=>{j(!1);if(window.jbiNavigate)window.jbiNavigate("orders");else p("orders");},className:"block w-full text-left py-1.5 text-xs font-semibold text-stone-800 uppercase tracking-wider",children:"My Orders & Tax Invoices"}),n.role==="admin"&&a.jsx("button",{onClick:()=>{p("admin"),j(!1)},className:"block w-full text-left py-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider",children:"Administrator Portal"})'

if mob_old in content:
    content = content.replace(mob_old, mob_new)
    print("Replaced mobile menu successfully!")

# Top nav ce
ce_old = 'ce=n?[{id:"home",label:"HOME"},{id:"shop",label:"SHOP"},{id:"about",label:"ABOUT"},{id:"contact",label:"CONTACT"},{id:"orders",label:"ORDERS"}]:[{id:"home",label:"HOME"},{id:"shop",label:"SHOP"},{id:"about",label:"ABOUT"},{id:"contact",label:"CONTACT"}]'
ce_new = 'ce=n&&n.role!=="admin"?[{id:"home",label:"HOME"},{id:"shop",label:"SHOP"},{id:"about",label:"ABOUT"},{id:"contact",label:"CONTACT"},{id:"orders",label:"ORDERS"}]:[{id:"home",label:"HOME"},{id:"shop",label:"SHOP"},{id:"about",label:"ABOUT"},{id:"contact",label:"CONTACT"}]'

if ce_old in content:
    content = content.replace(ce_old, ce_new)
    print("Replaced navbar ce successfully!")

with open("public/assets/index-v2-aboutphotos.js", "w", encoding="utf-8") as f:
    f.write(content)
print("Updated index-v2-aboutphotos.js successfully!")
