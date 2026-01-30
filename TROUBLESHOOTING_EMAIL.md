# Troubleshooting: Correos No Llegan

## Checklist de Verificación

### 1. Verificar Configuración en el Código ✅

Verifica que estos valores estén correctos en `contact-form.component.ts`:

```typescript
EMAILJS_SERVICE_ID = 'service_oeiws9r'      // Debe coincidir con tu servicio en EmailJS
EMAILJS_TEMPLATE_ID = 'template_86mozuk'     // Debe coincidir con tu template en EmailJS
EMAILJS_PUBLIC_KEY = '9_IXVLKYZ20hyTLc8'    // Debe ser tu Public Key de EmailJS
RECIPIENT_EMAIL = 'admin@zururakids.com'     // Email destino
```

**Cómo verificar:**
1. Ve a https://www.emailjs.com/
2. **Email Services** → Verifica que `service_oeiws9r` existe
3. **Email Templates** → Verifica que `template_86mozuk` existe
4. **Account → General** → Verifica tu Public Key

---

### 2. Verificar Conexión SMTP en EmailJS 🔌

**En EmailJS Dashboard:**

1. Ve a **Email Services** → Selecciona `service_oeiws9r`
2. Haz clic en **Test** o **Send Test Email**
3. Si falla, verifica:
   - **SMTP Server**: `smtp-mail.outlook.com` o `smtp.office365.com`
   - **Port**: `587` (TLS) o `465` (SSL)
   - **Username**: Tu email completo (ej: `admin@zururakids.com`)
   - **Password**: Contraseña correcta de Outlook
   - **Security**: TLS o SSL según el puerto

**Errores comunes:**
- ❌ "Authentication failed" → Usuario/contraseña incorrectos
- ❌ "Connection timeout" → Servidor SMTP incorrecto
- ❌ "SSL/TLS error" → Puerto incorrecto

---

### 3. Verificar Template en EmailJS 📧

**En EmailJS Dashboard:**

1. Ve a **Email Templates** → Selecciona `template_86mozuk`
2. Verifica que tenga estas variables:
   ```
   {{from_name}}
   {{from_email}}
   {{organization}}
   {{subject}}
   {{message}}
   {{to_email}}
   ```
3. Verifica el campo **To Email**:
   - Debe tener: `{{to_email}}` (usa el valor del código)
   - O directamente: `admin@zururakids.com` (fijo)

---

### 4. Verificar Logs en EmailJS 📊

**En EmailJS Dashboard:**

1. Ve a **Logs** o **Activity**
2. Busca intentos de envío recientes
3. Revisa si hay errores:
   - ✅ "Sent" → El correo se envió correctamente
   - ❌ "Failed" → Revisa el mensaje de error
   - ⏳ "Pending" → Puede estar en cola

**Errores comunes en logs:**
- "Template not found" → Template ID incorrecto
- "Service not found" → Service ID incorrecto
- "Invalid public key" → Public Key incorrecto
- "SMTP error" → Problema con configuración SMTP

---

### 5. Verificar Carpeta de Spam 📥

**En tu cuenta de Outlook:**

1. Revisa la carpeta **Spam/Correo no deseado**
2. Revisa la carpeta **Otros** o **Filtros**
3. Si encuentras correos ahí:
   - Márcalos como "No es spam"
   - Agrega el remitente a contactos
   - Verifica configuración de filtros

---

### 6. Verificar Consola del Navegador 🖥️

**Al enviar el formulario:**

1. Abre **DevTools** (F12)
2. Ve a la pestaña **Console**
3. Busca mensajes:
   - ✅ "Email sent successfully!" → El código funcionó
   - ❌ "Error sending email:" → Revisa el error completo

**Errores comunes:**
- "Network error" → Problema de conexión
- "Invalid service ID" → Service ID incorrecto
- "Invalid template ID" → Template ID incorrecto
- "Invalid public key" → Public Key incorrecto

---

### 7. Verificar Configuración DNS (SPF/DKIM) 🌐

**Si los correos van a spam:**

1. Verifica registros SPF en tu dominio
2. Verifica registros DKIM en tu dominio
3. Usa herramientas como:
   - https://mxtoolbox.com/spf.aspx
   - https://mxtoolbox.com/dkim.aspx

---

### 8. Probar con Email de Prueba 🧪

**En el código, temporalmente:**

1. Cambia `RECIPIENT_EMAIL` a un email personal (Gmail, etc.)
2. Prueba enviar el formulario
3. Si llega a Gmail pero no a Outlook:
   - Problema con configuración SMTP de Outlook
   - Problema con filtros de Outlook
4. Si no llega a ningún lado:
   - Problema con EmailJS o configuración del código

---

## Pasos de Diagnóstico Rápido

### Paso 1: Verificar que el formulario se envía
- Abre consola del navegador (F12)
- Envía el formulario
- ¿Ves "Email sent successfully!"? → Continúa al Paso 2
- ¿Ves un error? → Revisa el error y corrige

### Paso 2: Verificar EmailJS
- Ve a EmailJS Dashboard → Logs
- ¿Aparece el intento de envío? → Continúa al Paso 3
- ¿No aparece? → Revisa Service ID, Template ID, Public Key

### Paso 3: Verificar SMTP
- Ve a EmailJS → Email Services → Test
- ¿El test funciona? → Continúa al Paso 4
- ¿Falla? → Revisa configuración SMTP

### Paso 4: Verificar destino
- Revisa spam en Outlook
- Revisa filtros en Outlook
- Prueba con otro email destino

---

## Soluciones Comunes

### Problema: "Authentication failed" en EmailJS
**Solución:**
- Verifica usuario y contraseña de Outlook
- Asegúrate de usar la contraseña de la cuenta, no la de la app
- Si usas autenticación de dos factores, puede necesitar contraseña de aplicación

### Problema: Correos van a spam
**Solución:**
- Configura registros SPF/DKIM
- Marca como "No es spam" los primeros correos
- Agrega el remitente a contactos

### Problema: "Service not found"
**Solución:**
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo en EmailJS

### Problema: "Template not found"
**Solución:**
- Verifica que el Template ID sea correcto
- Asegúrate de que el template esté publicado

---

## Contacto de Soporte

Si nada funciona:
1. Revisa la documentación de EmailJS: https://www.emailjs.com/docs/
2. Contacta soporte de EmailJS
3. Verifica con otro servicio de email (Gmail SMTP) para aislar el problema

