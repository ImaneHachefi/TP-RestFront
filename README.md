# Account Client – Application de Gestion des Comptes Bancaires

## 1. Présentation du projet

**Account Client** est une application web développée avec React permettant de gérer les comptes bancaires à travers une interface utilisateur simple et intuitive.

L'application communique avec un backend développé avec Spring Boot via une API REST afin de récupérer et d'enregistrer les informations des comptes bancaires.

Elle permet notamment d'ajouter de nouveaux comptes et de consulter la liste des comptes existants.

## 2. Fonctionnalités principales

- **Ajout d'un compte bancaire :** saisie du solde, de la date de création et du type de compte.
- **Choix du type de compte :** compte courant ou compte épargne.
- **Affichage des comptes :** consultation de la liste des comptes enregistrés.
- **Communication avec le backend :** échanges de données via des requêtes HTTP avec Axios.
- **Actualisation automatique :** mise à jour de la liste après l'ajout d'un nouveau compte.

## 3. Technologies utilisées

| Technologie | Utilisation |
|---|---|
| React 18 | Développement de l'interface utilisateur |
| JavaScript | Logique de l'application |
| Axios | Communication avec l'API REST |
| Bootstrap 5 | Mise en forme de l'interface |
| Spring Boot | Backend et services REST |
| Docker | Conteneurisation de l'application |
| Nginx | Serveur web pour la version de production |

## 4. Architecture du projet

```text
account-client/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── AccountForm.js
│   │   └── AccountList.js
│   │
│   ├── App.js
│   ├── index.js
│   └── config.js
│
├── Dockerfile
├── docker-compose.yml
├── package.json
└── .dockerignore
```
<img width="520" height="695" alt="Capture d&#39;écran 2026-11-04 230921" src="https://github.com/user-attachments/assets/702db4a8-42a5-48ef-8ef0-a8853f27b0f6" />

### Description des composants

- **App.js :** composant principal qui regroupe le formulaire d'ajout et la liste des comptes.
- **AccountForm.js :** gère la saisie et l'envoi des informations d'un nouveau compte.
- **AccountList.js :** récupère et affiche les comptes provenant du backend.
- **config.js :** centralise l'URL de base de l'API REST.

## 5. Communication avec le backend

L'application communique avec le backend Spring Boot à travers les endpoints REST suivants :

| Méthode HTTP | Endpoint | Description |
|---|---|---|
| GET | `/comptes` | Récupérer la liste des comptes |
| POST | `/comptes` | Ajouter un nouveau compte |

**URL de base configurée :**

```text
http://localhost:8082/banque
```

L'URL peut être personnalisée grâce à la variable d'environnement `REACT_APP_API_BASE_URL`.

## 6. Installation et lancement en local

### Prérequis

- Node.js et npm installés.
- Backend Spring Boot démarré.
- Accès au service backend sur le port 8082.

### Étape 1 : Installer les dépendances

```bash
npm install
```

### Étape 2 : Démarrer l'application

```bash
npm start
```

L'application sera accessible à l'adresse :

```text
http://localhost:3000
```

Si le port 3000 est déjà utilisé, il est possible de lancer l'application sur un autre port avec PowerShell :

```powershell
$env:PORT=3001
npm start
```

L'application sera alors accessible sur :

```text
http://localhost:3001
```

## 7. Déploiement avec Docker

Le projet contient un Dockerfile permettant de construire une image optimisée de l'application React.

Le processus utilise deux étapes :

1. **Build :** utilisation de Node.js pour installer les dépendances et générer les fichiers de production React.
2. **Production :** utilisation de Nginx pour servir les fichiers statiques générés.

### Construction et lancement

Le fichier `docker-compose.yml` configure le port externe 3001 vers le port interne 80 de Nginx.

```yaml
services:
  client:
    build: .
    container_name: account-client
    ports:
      - "3001:80"
```

Exécuter les commandes suivantes à la racine du projet :

```bash
docker compose down
docker compose up --build -d
```

Pour vérifier les conteneurs actifs :

```bash
docker ps
```

L'application sera accessible sur :

```text
http://localhost:3001
```

## 8. Résultats et captures d'écran

Cette section présente les principales interfaces de l'application après son exécution.

### 8.1 Interface principale – Formulaire d'ajout d'un compte

Cette interface permet à l'utilisateur de renseigner les informations nécessaires à la création d'un compte bancaire : solde, date de création et type de compte.

<img width="1909" height="1027" alt="Capture d&#39;écran 2026-11-04 230837" src="https://github.com/user-attachments/assets/4a76e888-5369-415d-8f45-69209cfdfda5" />

### 8.2 Ajout d'un compte bancaire

Après avoir renseigné les champs obligatoires, l'utilisateur clique sur le bouton « Ajouter » pour envoyer les données au backend.

<img width="1550" height="421" alt="Capture d&#39;écran 2026-11-04 231116" src="https://github.com/user-attachments/assets/27f887bb-3dcb-474f-a70a-d0b508ab0b77" />
<img width="1693" height="307" alt="Capture d&#39;écran 2026-11-04 231138" src="https://github.com/user-attachments/assets/dbaba272-1bd3-4e86-9c7c-929a9854d79d" />

### 8.3 Affichage de la liste des comptes

Les comptes enregistrés dans la base de données sont récupérés depuis le backend et affichés dans un tableau contenant les informations suivantes :

- Identifiant du compte.
- Solde.
- Date de création.
- Type de compte.

<img width="1514" height="418" alt="image" src="https://github.com/user-attachments/assets/914a7022-e01c-45ec-a693-4e78a86e9a5b" />

### 8.4 Résultat après l'ajout d'un compte

Après un ajout réussi, la liste des comptes est automatiquement actualisée afin d'afficher le nouveau compte.

<img width="1546" height="510" alt="Capture d&#39;écran 2026-11-04 231149" src="https://github.com/user-attachments/assets/8b1bba34-3029-4eb5-ab75-3e70f3c38252" />

### 8.5 Exécution avec Docker

Cette capture présente le conteneur Docker en cours d'exécution et l'application accessible à travers le port 3001.

<img width="1482" height="625" alt="Capture d&#39;écran 2026-11-04 230943" src="https://github.com/user-attachments/assets/9e99e379-f890-4a3b-af3b-56c0b22b33a2" />

## 9. Conclusion

Le projet Account Client permet de mettre en pratique le développement d'une interface web avec React et son intégration avec un backend Spring Boot à travers une API REST.

Il illustre également l'utilisation d'Axios pour les échanges HTTP, de Bootstrap pour la conception de l'interface utilisateur et de Docker pour la conteneurisation et le déploiement de l'application.

Cette architecture permet de séparer la partie frontend de la partie backend et facilite ainsi la maintenance et l'évolution de l'application.
