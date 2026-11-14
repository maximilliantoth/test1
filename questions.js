// ============================================================================
// UPOZORNENIE PRED ÚPRAVOU:
// Text je zabalený v JS template literáli (`...`).
// V texte otázok NEPOUŽÍVAJ spätné úvodzovky (`), sekvenciu ${...}
// ani spätné lomky (\), inak sa súbor nemusí správne načítať!
// Bežné úvodzovky (" alebo ') môžeš používať bez obáv.
// ============================================================================

window.QUESTIONS_TEXT = `
# Zoznam 200 otázok všeobecného prehľadu pre hru Pointless
# Formát každého riadka: KATEGÓRIA | Text otázky
# Prázdne riadky a riadky začínajúce na # alebo // sa ignorujú.

# 1. GEOGRAFIA (20)
GEOGRAFIA | Pomenuj oficiálne mesto na Slovensku.
GEOGRAFIA | Pomenuj štát v Európe (podľa OSN).
GEOGRAFIA | Pomenuj hlavné mesto na svete.
GEOGRAFIA | Pomenuj rieku pretekajúcu cez Slovensko.
GEOGRAFIA | Pomenuj ostrovný štát na svete.
GEOGRAFIA | Pomenuj pohorie alebo národný park na Slovensku.
GEOGRAFIA | Pomenuj štát v Afrike.
GEOGRAFIA | Pomenuj štát v Južnej alebo Severnej Amerike.
GEOGRAFIA | Pomenuj štát v Ázii.
GEOGRAFIA | Pomenuj more alebo oceán na Zemi.
GEOGRAFIA | Pomenuj sopku na svete.
GEOGRAFIA | Pomenuj svetadiel (kontinent) na Zemi.
GEOGRAFIA | Pomenuj známu púšť na svete.
GEOGRAFIA | Pomenuj európsku rieku (mimo Slovenska).
GEOGRAFIA | Pomenuj susedný štát Slovenska alebo Česka.
GEOGRAFIA | Pomenuj veľký ostrov v Európe alebo Stredozemnom mori.
GEOGRAFIA | Pomenuj štát, ktorého názov začína na písmeno S.
GEOGRAFIA | Pomenuj mesto v Českej republike.
GEOGRAFIA | Pomenuj známy vodopád na svete.
GEOGRAFIA | Pomenuj kraj na Slovensku alebo v Česku.

# 2. PRÍRODA & ZVIERATÁ (20)
PRÍRODA | Pomenuj cicavca žijúceho v lese.
PRÍRODA | Pomenuj druh vtáka žijúceho vo voľnej prírode.
PRÍRODA | Pomenuj plemeno psa.
PRÍRODA | Pomenuj plemeno mačky.
PRÍRODA | Pomenuj dinosaura alebo prehistorického tvora.
PRÍRODA | Pomenuj ihličnatý alebo listnatý strom.
PRÍRODA | Pomenuj liečivú rastlinu alebo lúčny kvet.
PRÍRODA | Pomenuj morského živočícha (rybu, cicavca alebo bezstavovca).
PRÍRODA | Pomenuj druh hada alebo jaštera.
PRÍRODA | Pomenuj druh hmyzu.
PRÍRODA | Pomenuj zviera žijúce v Afrike na savane.
PRÍRODA | Pomenuj domáce hospodárske zviera.
PRÍRODA | Pomenuj jedlú alebo jedovatú hubu.
PRÍRODA | Pomenuj druh opice alebo ľudoopa.
PRÍRODA | Pomenuj zviera, ktoré v zime spí zimným spánkom.
PRÍRODA | Pomenuj dravého vtáka.
PRÍRODA | Pomenuj druh medveďa alebo šelmy.
PRÍRODA | Pomenuj izbovú rastlinu.
PRÍRODA | Pomenuj sladkovodnú rybu.
PRÍRODA | Pomenuj zviera, ktoré žije v Arktíde alebo Antarktíde.

# 3. JEDLO & NÁPOJE (20)
JEDLO & NÁPOJE | Pomenuj tradičné slovenské alebo české jedlo.
JEDLO & NÁPOJE | Pomenuj druh syra.
JEDLO & NÁPOJE | Pomenuj druh cestovín.
JEDLO & NÁPOJE | Pomenuj druh ovocia.
JEDLO & NÁPOJE | Pomenuj druh zeleniny.
JEDLO & NÁPOJE | Pomenuj korenie alebo bylinku používanú pri varení.
JEDLO & NÁPOJE | Pomenuj tradičný slovenský alebo svetový koláč či zákusok.
JEDLO & NÁPOJE | Pomenuj druh polievky.
JEDLO & NÁPOJE | Pomenuj druh pečiva alebo chleba.
JEDLO & NÁPOJE | Pomenuj druh orecha alebo semienka.
JEDLO & NÁPOJE | Pomenuj nealkoholický nápoj.
JEDLO & NÁPOJE | Pomenuj druh čaju alebo bylinkového nálevu.
JEDLO & NÁPOJE | Pomenuj druh kávy alebo kávového nápoja.
JEDLO & NÁPOJE | Pomenuj známu taliansku pizzu alebo jedlo.
JEDLO & NÁPOJE | Pomenuj druh strukoviny.
JEDLO & NÁPOJE | Pomenuj mliečny výrobok.
JEDLO & NÁPOJE | Pomenuj druh mäsa alebo údeniny.
JEDLO & NÁPOJE | Pomenuj príchuť zmrzliny.
JEDLO & NÁPOJE | Pomenuj omáčku alebo dresing k jedlu.
JEDLO & NÁPOJE | Pomenuj druh bobuľového ovocia.

# 4. VEDA & ĽUDSKÉ TELO (20)
VEDA | Pomenuj chemický prvok periodickej tabuľky.
VEDA | Pomenuj kosť v ľudskom tele.
VEDA | Pomenuj vnútorný orgán ľudského tela.
VEDA | Pomenuj jednotku sústavy SI (základnú alebo odvodenú).
VEDA | Pomenuj vedca, ktorý získal Nobelovu cenu alebo sa preslávil objavom.
VEDA | Pomenuj sval v ľudskom tele.
VEDA | Pomenuj zmysel človeka alebo časť oka či ucha.
VEDA | Pomenuj krvnú skupinu alebo zložku krvi.
VEDA | Pomenuj vitamín alebo minerál dôležitý pre telo.
VEDA | Pomenuj druh energie (napr. vo fyzike).
VEDA | Pomenuj skupenstvo látky alebo zmenu skupenstva.
VEDA | Pomenuj geometrický útvar alebo teleso.
VEDA | Pomenuj matematickú operáciu alebo funkciu.
VEDA | Pomenuj horninu alebo minerál v prírode.
VEDA | Pomenuj drahokam alebo polodrahokam.
VEDA | Pomenuj kov, ktorý pozná každý z bežného života.
VEDA | Pomenuj plyn nachádzajúci sa v atmosfére Zeme.
VEDA | Pomenuj zub v ľudských ústach (druh zuba).
VEDA | Pomenuj bežné detské alebo sezónne ochorenie.
VEDA | Pomenuj merací prístroj používaný v domácnosti alebo vede.

# 5. VESMÍR & POČASIE (20)
VESMÍR & POČASIE | Pomenuj planétu Slnečnej sústavy.
VESMÍR & POČASIE | Pomenuj mesiac niektorej planéty v Slnečnej sústave.
VESMÍR & POČASIE | Pomenuj súhvezdie na nočnej oblohe.
VESMÍR & POČASIE | Pomenuj vesmírnu misiu, raketu alebo vesmírnu stanicu.
VESMÍR & POČASIE | Pomenuj druh zrážok alebo jav počasia.
VESMÍR & POČASIE | Pomenuj ročné obdobie alebo kalendárny mesiac.
VESMÍR & POČASIE | Pomenuj fázu Mesiaca.
VESMÍR & POČASIE | Pomenuj známu hviezdu alebo galaxiu.
VESMÍR & POČASIE | Pomenuj svetovú stranu alebo smer na kompase.
VESMÍR & POČASIE | Pomenuj prírodnú katastrofu (napr. sopečnú alebo poveternostnú).
VESMÍR & POČASIE | Pomenuj typ oblaku alebo atmosférický jav na oblohe.
VESMÍR & POČASIE | Pomenuj známeho kozmonauta alebo astronauta.
VESMÍR & POČASIE | Pomenuj teleso vo vesmíre (okrem planét a hviezd).
VESMÍR & POČASIE | Pomenuj časové pásmo alebo jednotku času.
VESMÍR & POČASIE | Pomenuj podnebné pásmo na Zemi.
VESMÍR & POČASIE | Pomenuj vietor alebo búrkový jav.
VESMÍR & POČASIE | Pomenuj vesmírnu agentúru na svete.
VESMÍR & POČASIE | Pomenuj deň v týždni.
VESMÍR & POČASIE | Pomenuj znamenie zverokruhu.
VESMÍR & POČASIE | Pomenuj teleskop alebo observatórium (vesmírne či pozemské).

# 6. HISTÓRIA & SPOLOČNOSŤ (20)
HISTÓRIA | Pomenuj panovníka, cisára alebo kráľa v dejinách Európy.
HISTÓRIA | Pomenuj starovekú civilizáciu alebo ríšu.
HISTÓRIA | Pomenuj hrad alebo zámok na Slovensku.
HISTÓRIA | Pomenuj prezidenta USA, Slovenska alebo Československa.
HISTÓRIA | Pomenuj boha alebo bytosť z gréckej, rímskej alebo severskej mytológie.
HISTÓRIA | Pomenuj známu osobnosť slovenských dejín.
HISTÓRIA | Pomenuj svetovú náboženskú tradíciu alebo vierovyznanie.
HISTÓRIA | Pomenuj štátny sviatok alebo významný deň na Slovensku.
HISTÓRIA | Pomenuj historickú epochu alebo obdobie ľudstva.
HISTÓRIA | Pomenuj známu bitku alebo vojnový konflikt z učebníc dejepisu.
HISTÓRIA | Pomenuj div sveta (staroveký alebo novodobý).
HISTÓRIA | Pomenuj známu historickú stavbu v Európe.
HISTÓRIA | Pomenuj vynález, ktorý zmenil dejiny ľudstva.
HISTÓRIA | Pomenuj pravekého alebo starovekého vládcu či bojovníka.
HISTÓRIA | Pomenuj povolanie alebo remeslo z minulosti.
HISTÓRIA | Pomenuj slávneho moreplavca alebo objaviteľa.
HISTÓRIA | Pomenuj typ politického zriadenia alebo formy vlády.
HISTÓRIA | Pomenuj medzinárodnú organizáciu (napr. OSN, EÚ, NATO).
HISTÓRIA | Pomenuj rímsku číslicu alebo písmeno gréckej abecedy.
HISTÓRIA | Pomenuj významný dokument, listinu alebo zmluvu z histórie.

# 7. ŠPORT (20)
ŠPORT | Pomenuj olympijský šport.
ŠPORT | Pomenuj futbalový klub, ktorý hral Ligu majstrov.
ŠPORT | Pomenuj tím NHL (hokejovej ligy).
ŠPORT | Pomenuj slovenského olympijského medailistu alebo známeho športovca.
ŠPORT | Pomenuj okruh Formuly 1.
ŠPORT | Pomenuj tenistu alebo tenistku, ktorí vyhrali grandslamový turnaj.
ŠPORT | Pomenuj zimný šport.
ŠPORT | Pomenuj vodný šport.
ŠPORT | Pomenuj bojový šport alebo bojové umenie.
ŠPORT | Pomenuj atletickú disciplínu.
ŠPORT | Pomenuj loptovú hru.
ŠPORT | Pomenuj časť futbalového ihriska alebo pozíciu hráča vo futbale.
ŠPORT | Pomenuj športové náčinie alebo pomôcku (napr. loptu, raketu...).
ŠPORT | Pomenuj veľké športové podujatie na svete.
ŠPORT | Pomenuj plavecký štýl.
ŠPORT | Pomenuj cyklistické preteky alebo známeho cyklistu.
ŠPORT | Pomenuj pozíciu hráča v ľadovom hokeji.
ŠPORT | Pomenuj šport, ktorý sa hrá s sieťou uprostred ihriska.
ŠPORT | Pomenuj šport, pri ktorom sa používajú korčule alebo lyže.
ŠPORT | Pomenuj šachovú figúrku.

# 8. FILM, HUDBA & KULTÚRA (20)
KULTÚRA | Pomenuj hudobný nástroj symfonického orchestra.
KULTÚRA | Pomenuj hudobnú skupinu alebo speváka z 20. alebo 21. storočia.
KULTÚRA | Pomenuj hudobného skladateľa klasickej hudby.
KULTÚRA | Pomenuj spisovateľa alebo básnika (slovenského alebo svetového).
KULTÚRA | Pomenuj svetoznámeho maliara alebo sochára.
KULTÚRA | Pomenuj film ocenený Oscarom alebo známy veľkofilm.
KULTÚRA | Pomenuj známy animovaný film od štúdia Pixar alebo Disney.
KULTÚRA | Pomenuj postavu zo sveta Star Wars alebo Pána prsteňov.
KULTÚRA | Pomenuj postavu zo sveta Marvelu alebo DC Comics.
KULTÚRA | Pomenuj seriál z produkcie HBO alebo Netflix.
KULTÚRA | Pomenuj režiséra celovečerných filmov.
KULTÚRA | Pomenuj hudobný žáner.
KULTÚRA | Pomenuj literárny žáner alebo druh knihy.
KULTÚRA | Pomenuj klasickú rozprávku pre deti (napr. od Dobšinského, Grimmovcov či Andersena).
KULTÚRA | Pomenuj známy slovenský alebo český film či rozprávku.
KULTÚRA | Pomenuj tanec alebo tanečný štýl.
KULTÚRA | Pomenuj druh výtvarného umenia alebo techniky kreslenia.
KULTÚRA | Pomenuj divadelný alebo filmový žáner.
KULTÚRA | Pomenuj známu videohru alebo hernú sériu.
KULTÚRA | Pomenuj hernú postavu (napr. z hier Nintendo, PlayStation, PC).

# 9. KAŽDODENNÝ ŽIVOT & DOMÁCNOSŤ (20)
KAŽDODENNÝ ŽIVOT | Pomenuj kus nábytku v byte alebo dome.
KAŽDODENNÝ ŽIVOT | Pomenuj kuchynský spotrebič alebo riad.
KAŽDODENNÝ ŽIVOT | Pomenuj kus oblečenia.
KAŽDODENNÝ ŽIVOT | Pomenuj druh obuvi.
KAŽDODENNÝ ŽIVOT | Pomenuj farbu alebo odtieň.
KAŽDODENNÝ ŽIVOT | Pomenuj školský predmet na základnej alebo strednej škole.
KAŽDODENNÝ ŽIVOT | Pomenuj školskú potrebu alebo písaciu pomôcku.
KAŽDODENNÝ ŽIVOT | Pomenuj nástroj alebo náradie v dielni.
KAŽDODENNÝ ŽIVOT | Pomenuj miestnosť v dome alebo byte.
KAŽDODENNÝ ŽIVOT | Pomenuj bežné povolanie alebo zamestnanie.
KAŽDODENNÝ ŽIVOT | Pomenuj hygienickú potrebu v kúpeľni.
KAŽDODENNÝ ŽIVOT | Pomenuj šperk alebo módny doplnok.
KAŽDODENNÝ ŽIVOT | Pomenuj spoločenskú alebo kartovú hru.
KAŽDODENNÝ ŽIVOT | Pomenuj hračku pre deti.
KAŽDODENNÝ ŽIVOT | Pomenuj typ budovy alebo verejnej inštitúcie v meste.
KAŽDODENNÝ ŽIVOT | Pomenuj druh materiálu (napr. na stavbu alebo výrobu vecí).
KAŽDODENNÝ ŽIVOT | Pomenuj člena rodiny alebo príbuzenský vzťah.
KAŽDODENNÝ ŽIVOT | Pomenuj emóciu alebo ľudskú vlastnosť.
KAŽDODENNÝ ŽIVOT | Pomenuj vec, ktorú si ľudia berú na dovolenku k moru.
KAŽDODENNÝ ŽIVOT | Pomenuj vec, ktorú nosíme v peňaženke alebo kabelke/batohu.

# 10. DOPRAVA, TECHNOLÓGIE & SVET (20)
SVET & TECH | Pomenuj dopravný prostriedok.
SVET & TECH | Pomenuj značku automobilu.
SVET & TECH | Pomenuj leteckú spoločnosť (aerolinku).
SVET & TECH | Pomenuj oficiálnu svetovú menu (okrem eura a dolára).
SVET & TECH | Pomenuj oficiálny úradný jazyk niektorého štátu.
SVET & TECH | Pomenuj programovací jazyk alebo operačný systém.
SVET & TECH | Pomenuj známu technologickú firmu alebo značku elektroniky.
SVET & TECH | Pomenuj sociálnu sieť alebo komunikačnú aplikáciu.
SVET & TECH | Pomenuj internetový prehliadač alebo vyhľadávač.
SVET & TECH | Pomenuj súčiastku alebo príslušenstvo k počítaču.
SVET & TECH | Pomenuj formát počítačového súboru (príponu).
SVET & TECH | Pomenuj druh lode alebo plavidla.
SVET & TECH | Pomenuj dopravnú značku alebo prvok cestnej premávky.
SVET & TECH | Pomenuj typ vlaku alebo koľajového vozidla.
SVET & TECH | Pomenuj palivo alebo zdroj pohonu pre vozidlá.
SVET & TECH | Pomenuj svetoznámu stavbu, pamiatku alebo mrakodrap.
SVET & TECH | Pomenuj slávny most alebo tunel na svete.
SVET & TECH | Pomenuj mobilný telefón alebo výrobcu smartfónov.
SVET & TECH | Pomenuj typ obchodu alebo predajne.
SVET & TECH | Pomenuj platobnú metódu v obchode alebo na internete.
`;
