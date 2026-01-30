# Actualizar Configuración EmailJS con Outlook

## Pasos para Actualizar el Código

### 1. Obtener los IDs de EmailJS

1. Ve a https://www.emailjs.com/
2. Inicia sesión en tu cuenta
3. Ve a **Email Services** → Encuentra tu servicio de Outlook
4. Copia el **Service ID** (ej: `service_xxxxx`)
5. Ve a **Email Templates** → Encuentra tu template
6. Copia el **Template ID** (ej: `template_xxxxx`)
7. Ve a **Account** → **General** → Copia tu **Public Key**

### 2. Actualizar el Código

Edita el archivo: `src/app/components/contact-form/contact-form.component.ts`

Actualiza estas líneas (alrededor de la línea 30-35):

```typescript
// EmailJS configuration - Outlook/GoDaddy
private readonly EMAILJS_SERVICE_ID = 'TU_SERVICE_ID_AQUI'; // Reemplaza con tu Service ID
private readonly EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID_AQUI'; // Reemplaza con tu Template ID
private readonly EMAILJS_PUBLIC_KEY = 'TU_PUBLIC_KEY_AQUI'; // Reemplaza con tu Public Key

// Email destination - Actualiza con tu dirección de Outlook
private readonly RECIPIENT_EMAIL = 'tu-email@zururakids.com'; // Reemplaza con tu email de Outlook
```

### 3. Verificar Configuración SMTP en EmailJS

Asegúrate de que tu servicio en EmailJS esté configurado con Outlook:

**Configuración SMTP de Outlook:**
- **SMTP Server**: `smtp-mail.outlook.com` o `smtp.office365.com`
- **SMTP Port**: `587` (TLS) o `465` (SSL)
- **SMTP Username**: Tu dirección de correo completa (ej: `hello@zururakids.com`)
- **SMTP Password**: Tu contraseña de Outlook
- **Security**: TLS o SSL

### 4. Verificar Template

Asegúrate de que tu template en EmailJS tenga estas variables:
- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente
- `{{organization}}` - Organización
- `{{subject}}` - Asunto
- `{{message}}` - Mensaje
- `{{to_email}}` - Email destino (o pon directamente tu email)

### 5. Probar el Formulario

1. Ejecuta: `npm start`
2. Completa el formulario de contacto
3. Verifica que recibas el correo en tu cuenta de Outlook

## Valores Actuales en el Código

Si no creaste un nuevo servicio/template, los valores actuales son:
- **SERVICE_ID**: `service_zurura`
- **TEMPLATE_ID**: `template_86mozuk`
- **PUBLIC_KEY**: `9_IXVLKYZ20hyTLc8`
- **RECIPIENT_EMAIL**: `hello@zururakids.com`

Si actualizaste el servicio existente en EmailJS, estos valores deberían seguir funcionando.

## Troubleshooting

**Si los correos no llegan:**
1. Verifica que la conexión SMTP funcione (usa el botón Test en EmailJS)
2. Revisa la carpeta de spam en Outlook
3. Verifica los logs en EmailJS Dashboard
4. Asegúrate de que el dominio tenga los registros DNS correctos

**Si obtienes errores:**
- Verifica que los IDs sean correctos (sin espacios)
- Asegúrate de que el template tenga todas las variables necesarias
- Verifica que el Public Key sea correcto

