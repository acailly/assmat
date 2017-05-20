//
//  Calculs Assmat
//
// Ressources :
// - Décompte des congés :
// http://www.pajemploi.urssaf.fr/pajewebinfo/cms/sites/pajewebinfo/accueil/employeur-dassistante-maternelle/je-recrute-et-jemploie/les-droits-et-la-prise-des-conge.html
// - Congés Enfants à charge :
// https://www.zen-avec-mon-assmat.com/conges-mere-de-famille-et-enfants-malades/
//

// Données d'entrée
const input = require('./nous')

const {
    // Termes du contrat
    nbSemainesParAn,
    nbHeuresParSemaine,
    nbDeJoursDeGardeParSemaine,
    tauxHoraireBrut,
    // Bilan de l'année de référence
    nbSemainesTravailleesPendantAnneeReference,
    salairePercuPendantAnneeReference,
    nbJourCongesPayesPrisPendantAnneeReference,
    nbEnfantsMoins15ansAu30Avril
} = input

console.log('=== CONTRAT ===')
console.log('Nombre de semaines / an : ' + nbSemainesParAn)
console.log('Nombre d\'heures / semaine : ' + nbHeuresParSemaine)
console.log('Nombre de jours ouvrés / semaine : ' + nbDeJoursDeGardeParSemaine)
console.log('Taux horaire brut : ' + tauxHoraireBrut)
console.log('=== BILAN DE L\'ANNEE DE REFERENCE ===')
console.log('Nombre de semaines travaillées : ' + nbSemainesTravailleesPendantAnneeReference)
console.log('Salaire perçu : ' + salairePercuPendantAnneeReference)
console.log('Nombre de jours de congés pris : ' + nbJourCongesPayesPrisPendantAnneeReference)
console.log('Nombre d\'enfants de - de 15 ans le 30 avril : ' + nbEnfantsMoins15ansAu30Avril)

// Données fixes

const nbMois = 12
const nbJourOuvrablesParSemaine = 6
const nbCongesAcquisParSemaine = 2.5 / 4 // 2,5 jour ouvrable toutes les 4 semaines

// Salaire mensualisé

const nbHeuresParJour = nbHeuresParSemaine / nbDeJoursDeGardeParSemaine

const salaireMensualiseBrut = nbHeuresParSemaine * nbSemainesParAn * tauxHoraireBrut / nbMois

const nbHeureNormalesMensualisees = Math.round(
    nbHeuresParSemaine * nbSemainesParAn / nbMois
)

const nbJourActiviteMensualises = Math.ceil(
    4 * nbSemainesParAn / nbMois
)

// Nombre de semaines de congés payés prises

const nbSemaineCongesPayesPrisPendantAnneeReference =
    nbJourCongesPayesPrisPendantAnneeReference / nbJourOuvrablesParSemaine

// Congés payés acquis (jours ouvrables)

const nbCongesAcquisOuvrable = Math.ceil(
    (
        nbSemainesTravailleesPendantAnneeReference + nbSemaineCongesPayesPrisPendantAnneeReference
    ) * nbCongesAcquisParSemaine
)

// Congés supplémentaires Enfants à charge (jours ouvrables)

const nbCongesEnfantsACharge = nbEnfantsMoins15ansAu30Avril * 2

// Congés payés acquis au total (jours ouvrables)

const nbTotalCongesAcquisOuvrable = nbCongesAcquisOuvrable + nbCongesEnfantsACharge

// Calcul de l'indemnité : maintien de salaire

const nbTotalCongesAcquisOuvres = Math.ceil(
    nbTotalCongesAcquisOuvrable * nbDeJoursDeGardeParSemaine / nbJourOuvrablesParSemaine
)

const indemniteMaintienSalaire = Math.round(
    nbTotalCongesAcquisOuvres * nbHeuresParJour * tauxHoraireBrut
)

// Calcul de l'indemnité : 10%

const indemnite10pourCents = Math.round(
    salairePercuPendantAnneeReference * 0.1
)

// Calcul de l'indemnité : max

const indemniteConges = Math.max(indemniteMaintienSalaire, indemnite10pourCents)

// Dans le cas du paiment de l'indemnité au 1/12eme

const indemniteCongesAu112eme = Math.round(
    indemniteConges / 12
)

// ------------------- RESULTATS -------------------

console.log('=== RESULTATS ===')
console.log('Salaire mensualisé : ' + salaireMensualiseBrut)
console.log('Heures normales mensualisées : ' + nbHeureNormalesMensualisees)
console.log('Jours d\'activité mensualisés : ' + nbJourActiviteMensualises)
console.log('Indemnités de congés (10%) : ' + indemnite10pourCents)
console.log('Indemnités de congés (maintien de salaire) : ' + indemniteMaintienSalaire)
console.log('Indemnités de congés (plus favorable) : ' + indemniteConges)
console.log('Indemnités de congés au 1/12ème (plus favorable) : ' + indemniteCongesAu112eme)
















