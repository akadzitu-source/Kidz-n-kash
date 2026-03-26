## **🔧 Key Features Implemented**

### **1\. Offline‑First Architecture**

* Service Worker caches all static assets (React, CSS, images) using Workbox.  
* IndexedDB stores user progress (completed lessons, XP, badges) and lessons content locally.  
* Sync Engine – when online, local changes are pushed to Firestore; when offline, changes are queued.

### **2\. Firebase Backend (Free Tier)**

* Authentication – email/password (parental consent flag stored in Firestore).  
* Firestore – stores user profiles, progress, tenant data, and lessons (seed data).  
* Hosting – serves the web app with automatic SSL.

### **3\. Multi‑Tenancy**

* Each user belongs to a tenant (e.g., a school or organisation).  
* Super admins can create tenants, invite users, and view aggregated analytics.  
* Tenant branding (logo, colors) is stored in Firestore and applied dynamically.

### **4\. Mobile Apps (Capacitor)**

* Wrap the web app with Capacitor to generate native Android/iOS projects.  
* Capacitor plugins enable native features (geolocation, camera for scanning, push notifications).  
* Offline works the same – IndexedDB persists.

### **5\. Gamification & Content**

* 80+ lessons (same as HTML prototype) stored in Firestore and locally cached.  
* Quizzes award XP; badges earned on module completion.  
* Leaderboards (optional) aggregated from Firestore.

