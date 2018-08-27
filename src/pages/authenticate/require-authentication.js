import { AuthenticatePage } from './authenticate';
/**
 * Superclass that must be extended by pages with login required.
 */
var RequireAuthenticationPage = (function () {
    /**
     * Constructor.
     *
     * @param navCtrl Navigation controller.
     * @param navParams Navigation params.
     * @param authenticateProvider Authenticate provider.
     */
    function RequireAuthenticationPage(navCtrl, navParams, authenticateProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenticateProvider = authenticateProvider;
    }
    /**
     * Logout user.
     */
    RequireAuthenticationPage.prototype.logout = function () {
        this.authenticateProvider.clearAuthenticatedUser();
        this.navCtrl.setRoot(AuthenticatePage);
    };
    /**
     * Post-constructor.
     */
    RequireAuthenticationPage.prototype.ngOnInit = function () {
        // Check if user are logged in.
        if (this.authenticateProvider.getAuthenticatedUser() != null) {
            // Logged in!
            //  console.log('Call aa!');
        }
        else {
            // If the current page isn't AuthenticatePage, redirects to AuthenticatePage.
            if (this.navCtrl.getActive().component.name != AuthenticatePage.name) {
                this.navCtrl.setRoot(AuthenticatePage);
            }
        }
    };
    return RequireAuthenticationPage;
}());
export { RequireAuthenticationPage };
//# sourceMappingURL=require-authentication.js.map