import './MentionsLegales.scss';

function MentionsLegales() {
  return (
    <div className="mentions-legales">
      <div className="mentions-container">
        <h1>Mentions Légales</h1>

        <section className="mentions-section">
          <h2>1. Informations légales</h2>
          <p><strong>Nom du site :</strong> Mon livre de Recettes</p>
          <p><strong>Propriétaire :</strong> Marine Ligny</p>
          <p><strong>Email :</strong> marine.ligny@example.com</p>
        </section>

        <section className="mentions-section">
          <h2>2. Directeur de publication</h2>
          <p>Le directeur de la publication du site Mon livre de Recettes est Marine Ligny.</p>
        </section>

        <section className="mentions-section">
          <h2>3. Hébergement</h2>
          <p><strong>Hébergeur :</strong> Vercel Inc.</p>
          <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
          <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></p>
        </section>

        <section className="mentions-section">
          <h2>4. Propriété intellectuelle</h2>
          <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
          <p>Ce site a uniquement vocation à servir d'exemple et à présenter le travail de Marine Ligny. Il est issu d'un exercice réalisé durant sa formation, puis amélioré par la suite.</p>
          <p>Les images proviennent du site d’une formatrice de Marine Ligny, transmises dans le cadre de la formation. Les liens des images renvoient vers les sites de Solène, formatrice chez O'clock.</p>
        </section>

        <section className="mentions-section">
          <h2>5. Protection des données personnelles</h2>
          <p>Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.</p>
          <p>Ce site ne collecte aucune donnée personnelle sans votre consentement explicite. Les données collectées sont utilisées uniquement dans le cadre de l'utilisation du site.</p>
          <p>Pour exercer vos droits, vous pouvez nous contacter à l'adresse email indiquée ci-dessus.</p>
        </section>

        <section className="mentions-section">
          <h2>6. Cookies</h2>
          <p>Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Les cookies sont de petits fichiers texte stockés sur votre ordinateur par votre navigateur web.</p>
          <p>Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne pas fonctionner correctement.</p>
        </section>

        <section className="mentions-section">
          <h2>7. Responsabilité</h2>
          <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
          <p>Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible.</p>
        </section>

        <section className="mentions-section">
          <h2>8. Liens hypertextes</h2>
          <p>Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité du propriétaire du site.</p>
        </section>

        <section className="mentions-section">
          <h2>9. Litiges</h2>
          <p>Les présentes conditions du site et votre utilisation de ce site sont régies par le droit français. Tout litige portant sur l'utilisation du site sera de la compétence exclusive des tribunaux français.</p>
        </section>

        <section className="mentions-section">
          <h2>10. Contact</h2>
          <p>Pour toute question relative aux présentes mentions légales ou au site, vous pouvez nous contacter :</p>

          <p><strong>Email :</strong> <a href="mailto:mligny.dev@gmail.com">mligny.dev@gmail.com</a></p>
        </section>

        <div className="mentions-footer">
          <p><em>Dernière mise à jour : Septembre 2025</em></p>
        </div>
      </div>
    </div>
  );
}

export default MentionsLegales;
