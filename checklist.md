# models

##  product 
*done*

## regular **done**

## customs **done**

## testimonial **done**

## user **done**

# pages

##  storefront

###    home page
*/*
featured product section
Custom Print Request
testimonials preview

###    product listing page
*/products*
Search (name/description)
Filters (category, in-stock, price range optional)
Sort (newest, price low/high optional)

###    product details page
*/products/[slug]*
Image, price, category, tags
Stock status
“Request this item” or “Add to cart (future)”

###    Testimonials page
*/tstimonials*
Shows only approved testimonials
Submission form (name, rating, message)

###    custom order page
*/custom-order*
Form fields (description, color/material prefs, size, deadline, contact)
File upload (STL/ZIP/etc)
Confirmation status after submission

##   Admin Panel

###   Admin login
*/admin/login*

###   Admin dashboard 
*/admin*
Stat cards: products, orders, custom orders, testimonials, revenue
Recent tables: recent orders, custom requests, pending testimonials
Quick actions shortcuts

###   Admin products 
*/admin/products*
View list, filter by category, search
Create/edit/delete product
Toggle featured & in-stock

###   Admin orders 
*/admin/orders*
View & filter by status
Update status (Pending → In Progress → Ready → Completed)
Assign printer/student (optional)
Generate/print work order sheet

###   Admin custom orders 
*/admin/custom-orders*
View requests, filter/search
Update status (Submitted → Reviewed/Quoted → In Progress → Completed)
View uploaded files
Internal notes + assignment tracking

###   Admin testimonials 
*/admin/testimonials*
View all (approved + pending)
Approve/unapprove
Delete

###   Functional Requirements
Admin routes protected by JWT middleware
Clear audit-friendly info: timestamps, status changes (future upgrade: status history)
Printable work order templates (print CSS / dedicated print route)

##  Auth & Security

###   Auth Requirements
Passwords hashed with bcryptjs
JWT-based auth (prefer httpOnly cookie storage)
Admin-only API routes protected by middleware
Rate limiting (recommended for login + file upload routes)

###   Security Requirements
Validate all inputs server-side (Zod or equivalent recommended)
Sanitize text inputs displayed back in UI (prevent XSS)
File upload validation:
*Type allowlist (stl, obj, zip, png/jpg optional)*
*Size limits*
*Virus scanning optional (future)*
Do not expose secret keys to the client
Use environment variables for DB, JWT secret, and upload providers

# 