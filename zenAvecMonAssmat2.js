// Exemple : https://www.zen-avec-mon-assmat.com/conges-payes-en-annee-incomplete-illustration

const nbSemainesParAn = 36
const nbHeuresParSemaine = 40
const nbDeJoursDeGardeParSemaine = 4
const tauxHoraireBrut = 5

const nbSemainesTravailleesPendantAnneeReference = 36
const salairePercuPendantAnneeReference = (
            12 * nbHeuresParSemaine * nbSemainesParAn * tauxHoraireBrut / 12 // Salaires
        ) + 733 // indemniteCongesPayesVerseesPendantAnneeReference
const nbJourCongesPayesPrisPendantAnneeReference = 22
const nbEnfantsMoins15ansAu30Avril = 1

module.exports = {
  nbSemainesParAn,
  nbHeuresParSemaine,
  nbDeJoursDeGardeParSemaine,
  tauxHoraireBrut,
  nbSemainesTravailleesPendantAnneeReference,
  salairePercuPendantAnneeReference,
  nbJourCongesPayesPrisPendantAnneeReference,
  nbEnfantsMoins15ansAu30Avril
}
