<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ecotwin - Challenges Écolos</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f8ff;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
        .header {
            background-color: #4CAF50;
            color: white;
            width: 100%;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .container {
            max-width: 800px;
            margin: 20px;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .avatar-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px 0;
            padding: 20px;
            background-color: #e9f7ef;
            border-radius: 10px;
        }
        #avatar-preview {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid #4CAF50;
            margin-bottom: 20px;
        }
        .btn {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 12px 24px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 10px 2px;
            cursor: pointer;
            border-radius: 25px;
            transition: all 0.3s;
            font-weight: bold;
        }
        .btn:hover {
            background-color: #45a049;
            transform: scale(1.05);
        }
        .challenge-section {
            margin-top: 40px;
        }
        .challenge-card {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            margin: 15px 0;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            border-left: 5px solid;
            position: relative;
        }
        .easy {
            border-left-color: #4CAF50;
        }
        .medium {
            border-left-color: #FFC107;
        }
        .hard {
            border-left-color: #F44336;
        }
        .points-badge {
            background-color: #4CAF50;
            color: white;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 14px;
            font-weight: bold;
            margin-left: 10px;
        }
        .section-title {
            color: #4CAF50;
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 10px;
            margin-top: 30px;
        }
        .avatar-title {
            font-size: 24px;
            color: #2E7D32;
            text-align: center;
            margin-bottom: 20px;
        }
        .nav {
            display: flex;
            justify-content: space-around;
            width: 100%;
            background-color: #333;
            padding: 10px 0;
        }
        .nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
        .proof-section {
            display: none;
            margin-top: 15px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
            text-align: center;
        }
        .proof-preview {
            max-width: 100%;
            max-height: 150px;
            margin: 10px 0;
            border-radius: 8px;
            display: none;
        }
        .challenge-status {
            margin-top: 10px;
            font-weight: bold;
            text-align: center;
        }
        .completed {
            color: #4CAF50;
        }
        .in-progress {
            color: #FFC107;
        }
        .points-display {
            font-size: 20px;
            font-weight: bold;
            color: #4CAF50;
            text-align: center;
            margin: 20px 0;
        }
        .confirmation-dialog {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 100;
            justify-content: center;
            align-items: center;
        }
        .confirmation-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            max-width: 400px;
            text-align: center;
        }
        .btn-confirm {
            background-color: #4CAF50;
        }
        .btn-cancel {
            background-color: #f44336;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Ecotwin</h1>
        <p>Parce que même les super-héros ont besoin d'un coach vert... et c'est Ecotwin !</p>
    </div>

    <div class="nav">
        <a href="/">Accueil</a>
        <a href="/store">Boutique</a>
        
    </div>

    <div class="container">
        <!-- Section Avatar -->
        <div class="avatar-section">
            <h2 class="avatar-title">Créez votre Twin Avatar</h2>
            <img id="avatar-preview" src="https://via.placeholder.com/200?text=Ton+Avatar" alt="Preview Avatar">
            <input type="file" id="avatar-upload" accept="image/*" style="display: none;">
            <button class="btn" onclick="document.getElementById('avatar-upload').click()">Choisir une photo</button>
            <button class="btn" onclick="uploadAvatar()">Générer mon avatar</button>
            <p>Votre avatar évoluera avec vos actions écologiques!</p>
        </div>

        <!-- Points Display -->
        <div class="points-display">
            Votre score: <span id="user-points">0</span> points ♻️
        </div>

        <!-- Section Challenges -->
        <div class="challenge-section">
            <h2 class="section-title">Vos défis du jour</h2>
            
            <div class="challenge-card easy" id="challenge-1">
                <h3>Défi Facile 
                    <span class="points-badge">10 points</span>
                </h3>
                <p>Éteindre les lumières inutiles pendant 2 heures</p>
                <button class="btn" onclick="showConfirmation(1)">Accepter le défi</button>
                
                <div class="proof-section" id="proof-section-1">
                    <p><strong>Preuve requise:</strong> Envoyez une photo montrant que vous avez relevé ce défi</p>
                    <input type="file" id="proof-upload-1" accept="image/*" style="display: none;">
                    <button class="btn" onclick="document.getElementById('proof-upload-1').click()">
                        📸 Prendre une photo
                    </button>
                    <img id="proof-preview-1" class="proof-preview" src="" alt="Aperçu de la preuve">
                    <div style="margin-top: 15px;">
                        <button class="btn btn-confirm" onclick="submitProof(1)">Valider la preuve</button>
                        <button class="btn btn-cancel" onclick="cancelChallenge(1)">Annuler</button>
                    </div>
                </div>
                
                <div class="challenge-status" id="status-1"></div>
            </div>
            
            <div class="challenge-card medium" id="challenge-2">
                <h3>Défi Intermédiaire 
                    <span class="points-badge">25 points</span>
                </h3>
                <p>Douche de moins de 5 minutes</p>
                <button class="btn" onclick="showConfirmation(2)">Accepter le défi</button>
                
                <div class="proof-section" id="proof-section-2">
                    <p><strong>Preuve requise:</strong> Envoyez une photo montrant que vous avez relevé ce défi</p>
                    <input type="file" id="proof-upload-2" accept="image/*" style="display: none;">
                    <button class="btn" onclick="document.getElementById('proof-upload-2').click()">
                        📸 Prendre une photo
                    </button>
                    <img id="proof-preview-2" class="proof-preview" src="" alt="Aperçu de la preuve">
                    <div style="margin-top: 15px;">
                        <button class="btn btn-confirm" onclick="submitProof(2)">Valider la preuve</button>
                        <button class="btn btn-cancel" onclick="cancelChallenge(2)">Annuler</button>
                    </div>
                </div>
                
                <div class="challenge-status" id="status-2"></div>
            </div>
            
            <div class="challenge-card hard" id="challenge-3">
                <h3>Défi Difficile 
                    <span class="points-badge">50 points</span>
                </h3>
                <p>Journée sans plastique à usage unique</p>
                <button class="btn" onclick="showConfirmation(3)">Accepter le défi</button>
                
                <div class="proof-section" id="proof-section-3">
                    <p><strong>Preuve requise:</strong> Envoyez une photo montrant que vous avez relevé ce défi</p>
                    <input type="file" id="proof-upload-3" accept="image/*" style="display: none;">
                    <button class="btn" onclick="document.getElementById('proof-upload-3').click()">
                        📸 Prendre une photo
                    </button>
                    <img id="proof-preview-3" class="proof-preview" src="" alt="Aperçu de la preuve">
                    <div style="margin-top: 15px;">
                        <button class="btn btn-confirm" onclick="submitProof(3)">Valider la preuve</button>
                        <button class="btn btn-cancel" onclick="cancelChallenge(3)">Annuler</button>
                    </div>
                </div>
                
                <div class="challenge-status" id="status-3"></div>
            </div>
        </div>
    </div>

    <!-- Confirmation Dialog -->
    <div class="confirmation-dialog" id="confirmation-dialog">
        <div class="confirmation-content">
            <h3>Confirmer le défi</h3>
            <p id="confirmation-text">Êtes-vous sûr de vouloir relever ce défi?</p>
            <div>
                <button class="btn btn-confirm" id="confirm-accept">Oui, je relève le défi</button>
                <button class="btn btn-cancel" onclick="hideConfirmation()">Non, annuler</button>
            </div>
        </div>
    </div>

    <script>
        // Variables globales
        let currentUser = {
            id: 'user_' + Math.random().toString(36).substr(2, 9),
            points: 0,
            avatar: null,
            activeChallenges: {}
        };
        let currentChallengeId = null;

        // Initialisation
        document.addEventListener('DOMContentLoaded', function() {
            loadUserData();
            initProofUploaders();
        });

        // Gestion de l'avatar
        document.getElementById('avatar-upload').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('avatar-preview').src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        });

        function uploadAvatar() {
            const fileInput = document.getElementById('avatar-upload');
            if (fileInput.files.length === 0) {
                alert("Veuillez d'abord sélectionner une photo!");
                return;
            }

            alert("Génération de votre avatar en cours...");
            setTimeout(() => {
                currentUser.avatar = document.getElementById('avatar-preview').src;
                saveUserData();
                alert("Votre avatar est prêt! Relevez des défis pour le personnaliser.");
            }, 1500);
        }

        // Gestion des défis
        function showConfirmation(challengeId) {
            currentChallengeId = challengeId;
            const challenges = {
                1: { name: "Défi Facile", points: 10 },
                2: { name: "Défi Intermédiaire", points: 25 },
                3: { name: "Défi Difficile", points: 50 }
            };
            
            document.getElementById('confirmation-text').textContent = 
                `Relevez le "${challenges[challengeId].name}" pour ${challenges[challengeId].points} points?`;
            
            document.getElementById('confirm-accept').onclick = function() {
                acceptChallenge(challengeId);
                hideConfirmation();
            };
            
            document.getElementById('confirmation-dialog').style.display = 'flex';
        }

        function hideConfirmation() {
            document.getElementById('confirmation-dialog').style.display = 'none';
        }

        function acceptChallenge(challengeId) {
            // Afficher la section de preuve
            document.getElementById(`proof-section-${challengeId}`).style.display = 'block';
            
            // Cacher le bouton d'acceptation
            document.querySelector(`#challenge-${challengeId} button`).style.display = 'none';
            
            // Mettre à jour le statut
            document.getElementById(`status-${challengeId}`).textContent = "En attente de votre photo preuve...";
            document.getElementById(`status-${challengeId}`).className = "challenge-status in-progress";
            
            // Enregistrer le défi
            currentUser.activeChallenges[challengeId] = {
                name: ["Facile", "Intermédiaire", "Difficile"][challengeId-1],
                points: [10, 25, 50][challengeId-1],
                status: "pending"
            };
            
            saveUserData();
        }

        function initProofUploaders() {
            [1, 2, 3].forEach(challengeId => {
                const uploader = document.getElementById(`proof-upload-${challengeId}`);
                if (uploader) {
                    uploader.addEventListener('change', function(e) {
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = function(event) {
                                const preview = document.getElementById(`proof-preview-${challengeId}`);
                                preview.src = event.target.result;
                                preview.style.display = 'block';
                            };
                            reader.readAsDataURL(file);
                        }
                    });
                }
            });
        }

        function submitProof(challengeId) {
            const proofInput = document.getElementById(`proof-upload-${challengeId}`);
            if (!proofInput.files || proofInput.files.length === 0) {
                alert("Veuillez d'abord prendre une photo preuve!");
                return;
            }

            // Simulation d'envoi au serveur
            document.getElementById(`status-${challengeId}`).textContent = "Validation de votre preuve en cours...";
            
            setTimeout(() => {
                // Validation réussie
                const points = [10, 25, 50][challengeId-1];
                currentUser.points += points;
                currentUser.activeChallenges[challengeId].status = "completed";
                
                document.getElementById(`status-${challengeId}`).textContent = `✓ Défi validé! +${points} points`;
                document.getElementById(`status-${challengeId}`).className = "challenge-status completed";
                document.getElementById(`proof-section-${challengeId}`).style.display = 'none';
                
                // Réactiver le bouton
                const btn = document.querySelector(`#challenge-${challengeId} button`);
                btn.style.display = 'inline-block';
                btn.textContent = "Recommencer le défi";
                
                updatePointsDisplay();
                saveUserData();
                
                alert(`Félicitations! Vous avez gagné ${points} points!`);
            }, 2000);
        }

        function cancelChallenge(challengeId) {
            // Réinitialiser le défi
            document.getElementById(`proof-section-${challengeId}`).style.display = 'none';
            document.getElementById(`status-${challengeId}`).textContent = "";
            
            // Réafficher le bouton d'acceptation
            const btn = document.querySelector(`#challenge-${challengeId} button`);
            btn.style.display = 'inline-block';
            btn.textContent = "Accepter le défi";
            
            // Supprimer le défi actif
            delete currentUser.activeChallenges[challengeId];
            saveUserData();
        }

        function updatePointsDisplay() {
            document.getElementById('user-points').textContent = currentUser.points;
        }

        function saveUserData() {
            localStorage.setItem('ecotwinUser', JSON.stringify(currentUser));
        }

        function loadUserData() {
            const savedUser = localStorage.getItem('ecotwinUser');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                
                if (currentUser.avatar) {
                    document.getElementById('avatar-preview').src = currentUser.avatar;
                }
                
                document.getElementById('user-points').textContent = currentUser.points || 0;
                
                // Restaurer l'état des défis
                for (const challengeId in currentUser.activeChallenges) {
                    if (currentUser.activeChallenges[challengeId].status === "pending") {
                        document.getElementById(`proof-section-${challengeId}`).style.display = 'block';
                        document.querySelector(`#challenge-${challengeId} button`).style.display = 'none';
                        document.getElementById(`status-${challengeId}`).textContent = "En attente de votre photo preuve...";
                        document.getElementById(`status-${challengeId}`).className = "challenge-status in-progress";
                    }
                }
            }
        }
    </script>
</body>
</html>
