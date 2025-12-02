![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/micasadomotica/laliga-ip-list-unr/generate-laliga-ip-list.yml?label=Update%20Workflow)
![GitHub last commit](https://img.shields.io/github/last-commit/micasadomotica/laliga-ip-list-unr)
![Repo size](https://img.shields.io/github/repo-size/micasadomotica/laliga-ip-list-unr)
![License](https://img.shields.io/github/license/micasadomotica/laliga-ip-list-unr)
![Fork](https://img.shields.io/badge/Forked%20From-r4y7s%2Flaliga--ip--list-blue)


# 🛡️ LaLiga IP List UNR (Fork Mejorado)

## 🇪🇸 Descripción (ES)

Este repositorio mantiene **listas automáticas** de **IPs legítimas** afectadas por los **bloqueos judiciales de LaLiga en España**, según los datos públicos de [hayahora.futbol](https://hayahora.futbol/).

A diferencia del repositorio original, este fork genera **tres archivos adicionales**, optimizados para automatización avanzada, firewalls modernos y sistemas de routing selectivo:

| Archivo | Descripción |
|--------|-------------|
| `laliga_ip_list_unr_ipv4.txt` | Lista en formato *UNR-lists* de IPs IPv4 legítimas afectadas. |
| `laliga_ip_list_unr_ipv6.txt` | Lista en formato *UNR-lists* de IPs IPv6 legítimas afectadas. |
| `laliga_status.json` | Estado del bloqueo: `isBlocked`, fecha de actualización, contadores, etc. |
| `laliga_ip_list.txt` | Archivo original del repositorio upstream. |

Estos archivos se regeneran automáticamente mediante **GitHub Actions**, varias veces al día.

---

### 📄 ¿Para qué sirve esto?

Las IPs incluidas corresponden a servicios legítimos que resultan bloqueados por error durante las emisiones de partidos en España, afectando a:

- RAE (Real Academia Española)  
- Universidades y centros educativos  
- Plataformas de contenido legal  
- Medios de comunicación  
- Sitios oficiales de clubes y patrocinadores  

---

## ⚡ Cómo usar estas listas

Las listas en formato UNR (`*_unr_ipv4.txt` y `*_unr_ipv6.txt`) siguen el estándar del proyecto:

🔗 https://github.com/sirkirby/unr-lists

Puedes usarlas en:

- Firewalls  
- Proxies  
- Bloqueadores DNS  
- Routing selectivo por VPN  
- IDS/IPS  
- Sistemas como pfSense, OPNsense, Mikrotik, VyOS, etc.

---

## 🧩 Uso en equipos UniFi (UDM, UDM Pro, UDM-SE…)

Aunque Network 10.x incorpora el nuevo **Policy Engine**, actualmente **no permite usar Network Objects / Network Lists como destino en reglas de Policy-Based Routing**.

Cuando Ubiquiti active esta capacidad, podrás:

- Usar directamente `laliga_ip_list_unr_ipv4.txt` y `laliga_ip_list_unr_ipv6.txt`
- Crear Network Objects tipo *address-group*
- Aplicarlos como destino en reglas PBR
- Automatizar todo el proceso con la integración:

🔗 https://github.com/sirkirby/unifi-network-rules

### 🔧 Mientras tanto…

Puedes usar la solución funcional documentada aquí:

🔗 https://github.com/sirkirby/unifi-network-rules/issues/134#issuecomment-3592597307

Esta permite:

- Sincronizar automáticamente las listas UNR en tu UDM  
- Activar/desactivar rutas VPN según `isBlocked`  
- Manipular reglas de routing por origen/destino  
- Activar Kill Switch por dispositivo  
- Mantener todos los objetos actualizados desde este fork

---

## 🔄 Actualización automática

El workflow automático:

1. Obtiene IPs legítimas desde `hayahora.futbol`
2. Genera listas IPv4/IPv6 en formato UNR  
3. Construye `laliga_status.json` con información de estado  
4. Publica los archivos en `main`

---

## RAW Files

- IPv4 UNR: `https://raw.githubusercontent.com/micasadomotica/laliga-ip-list-unr/main/laliga_ip_list_unr_ipv4.txt`
- IPv6 UNR: `https://raw.githubusercontent.com/micasadomotica/laliga-ip-list-unr/main/laliga_ip_list_unr_ipv6.txt`
- Status JSON: `https://raw.githubusercontent.com/micasadomotica/laliga-ip-list-unr/main/laliga_status.json`

### Lista tradicional  
`https://raw.githubusercontent.com/micasadomotica/laliga-ip-list-unr/main/laliga_ip_list.txt`

---

# 🇬🇧 English Version

## Description

This repository maintains **automatically generated lists** of **legitimate IP addresses** unintentionally affected by LaLiga’s judicial IP blocking system in Spain, based on public data from:

🔗 https://hayahora.futbol/

Compared to the upstream project, this fork adds:

| File | Description |
|------|-------------|
| `laliga_ip_list_unr_ipv4.txt` | IPv4 list compatible with UNR-lists |
| `laliga_ip_list_unr_ipv6.txt` | IPv6 list compatible with UNR-lists |
| `laliga_status.json` | Blocking status (`isBlocked`), counts, timestamps |
| `laliga_ip_list.txt` | Upstream original list |

These files are regenerated automatically via GitHub Actions.

---

## Usage

You may use these lists in:

- Firewalls  
- DNS filters  
- Proxy servers  
- VPN selective routing  
- Security appliances  
- Home Assistant automations  

---

## UniFi Devices (UDM / UDM-Pro / UDM-SE)

UniFi Network 10.x introduces Network Objects, but **these objects cannot yet be used as destinations in Policy-Based Routing rules**.

Once Ubiquiti enables this feature in future releases, you will be able to:

- Import `laliga_ip_list_unr_ipv4.txt` and `laliga_ip_list_unr_ipv6.txt`
- Map them to Network Objects
- Use them for selective VPN routing
- Automate everything using:

🔗 https://github.com/sirkirby/unifi-network-rules

Until then, this workaround is fully functional:

🔗 https://github.com/sirkirby/unifi-network-rules/issues/134#issuecomment-3592597307

---

## RAW Files

- IPv4 UNR: `https://raw.githubusercontent.com/micasadomotica/laliga-ip-list-unr/main/laliga_ip_list_unr_ipv4.txt`
- IPv6 UNR: `https://raw.githubusercontent.com/micasadomotica/laliga-ip-list-unr/main/laliga_ip_list_unr_ipv6.txt`
- Status JSON: `https://raw.githubusercontent.com/micasadomotica/laliga-ip-list-unr/main/laliga_status.json`

---

## Final Notes

This fork is designed for:

- Home Assistant automation  
- Dynamic firewall object syncing  
- Automatic VPN routing control  
- Full compatibility with UNR-lists format

