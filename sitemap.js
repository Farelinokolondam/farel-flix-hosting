// api/sitemap.js - OTOMATIS DARI FIREBASE
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwKg7g0JzwVkCQ6pskhtEg8dZrs6hAasU",
  authDomain: "farel-flix-tambala.firebaseapp.com",
  projectId: "farel-flix-tambala",
  storageBucket: "farel-flix-tambala.firebasestorage.app",
  messagingSenderId: "265996924707",
  appId: "1:265996924707:web:e824c8cd3a195a9f8b3e96",
  measurementId: "G-8LJKB2W9WB"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
  try {
    const baseUrl = "https://farel-flix-hosting.vercel.app";
    
    // GANTI "movies" KALAU NAMA COLLECTION KAMU BEDA (misal "films" atau "videos")
    const snapshot = await getDocs(collection(db, "movies"));

    let urls = `
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

    snapshot.forEach((doc) => {
      const data = doc.data();
      const slug = data.slug || data.id || doc.id;
      urls += `
  <url>
    <loc>${baseUrl}/watch/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

   res.setHeader("Content-Type", "text/xml");
res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.status(200).send(xml);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}