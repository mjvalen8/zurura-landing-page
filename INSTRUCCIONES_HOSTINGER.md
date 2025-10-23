# Instrucciones para subir a Hostinger

## Archivos a subir:
1. Sube TODOS los archivos de la carpeta `dist/zurura-landing/browser/` a `public_html/`
2. Asegúrate de que el archivo `.htaccess` se suba también

## Estructura en Hostinger:
```
public_html/
├── index.html
├── .htaccess
├── main-*.js
├── polyfills-*.js
├── styles-*.css
├── assets/
│   └── logo/
│       ├── logo-48.svg
│       ├── logo-96.svg
│       ├── logo-192.svg
│       └── logo-500.svg
└── favicon.ico
```

## Pasos:
1. Accede al File Manager de Hostinger
2. Ve a la carpeta `public_html`
3. Sube todos los archivos de `dist/zurura-landing/browser/`
4. Verifica que `.htaccess` esté presente
5. Visita tu dominio

## Notas importantes:
- El archivo `.htaccess` es crucial para que funcionen las rutas de Angular
- Si tienes problemas con las rutas, verifica que `.htaccess` esté en `public_html/`
- Los archivos JS y CSS tienen nombres únicos para cache busting
- El favicon debería aparecer automáticamente

## Verificación:
- Visita tu dominio principal
- Prueba navegar entre secciones
- Verifica que el formulario de contacto funcione
- Confirma que el favicon aparezca
