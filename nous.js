const nbSemainesParAn = 45
const nbHeuresParSemaine = 36.5
const nbDeJoursDeGardeParSemaine = 4
const tauxHoraireBrut = 3.77

const nbSemainesTravailleesPendantAnneeReference = 45
const salairePercuPendantAnneeReference = (
            12 * nbHeuresParSemaine * nbSemainesParAn * tauxHoraireBrut / 12 // Salaires
        ) + 0 // indemniteCongesPayesVerseesPendantAnneeReference
const nbJourCongesPayesPrisPendantAnneeReference = 0
const nbEnfantsMoins15ansAu30Avril = 2

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
