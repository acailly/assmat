// Exemple : https://www.zen-avec-mon-assmat.com/conges-payes-en-annee-incomplete-illustration

const nbSemainesParAn = 36
const nbHeuresParSemaine = 40
const nbDeJoursDeGardeParSemaine = 4
const tauxHoraireBrut = 5

const nbSemainesTravailleesPendantAnneeReference = 31
const salairePercuPendantAnneeReference = (
            9 * nbHeuresParSemaine * nbSemainesParAn * tauxHoraireBrut / 12 // Salaires
        ) + 0 // indemniteCongesPayesVerseesPendantAnneeReference
const nbJourCongesPayesPrisPendantAnneeReference = 0
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
