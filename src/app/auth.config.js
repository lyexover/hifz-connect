export const authConfig = {           
    pages: {
        signIn: '/' // Si l'utilisateur n'est pas authentifié ou en cas d'erreur, 
                    // NextAuth le redirige vers la landing page (où se trouve le formulaire de connexion)
    }, 
    callbacks: {  // Les callbacks sont des fonctions prédéfinies par NextAuth qui permettent de personnaliser l'authentification

        authorized({ auth, request: { nextUrl } }) {  
            // Cette fonction est exécutée à chaque requête pour vérifier si l'utilisateur est autorisé à accéder à une page

            const isLoggedIn = !!auth?.user; // Vérifie si un utilisateur est authentifié (auth?.user est recupere de la route backend login)
            const isInHome = nextUrl.pathname.startsWith('/home'); // Vérifie si l'utilisateur essaie d'accéder à "/home"

            if (isInHome) {
                if (isLoggedIn) return true; // Autorise l'accès à "/home" si l'utilisateur est connecté
                return false; 
            } 
            else if (isLoggedIn) {  
                
                return Response.redirect(new URL('/home', nextUrl.origin)); 
            }

            return true; // Autorise l'accès aux autres pages
        } 

      

          } 
};
