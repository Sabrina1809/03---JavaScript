# Erweiterung mit JavaScript

[Seite](https://sqz0111.github.io/travelblog_extended/)

## Faq-Bereich

Im ersten Schritt wollen wir einen kleinen Faq-Bereich in unserer "about.html" schaffen. Dieser besteht aus Elementen dich durch Klicken eine entsprechende Antwort einblenden. Im folgenden sind nur die notwendigen Schritten angegeben, den Rest musst du kombinieren.

1. Erstelle einen neuen Bereich am Ende der Seite. Dieser Bereich soll aus einzelnen *faq-items*, die jeweils eine Überschrift mit der Frage enthält und die entsprechenden Antwort. Erstelle bis zu 4 solcher *faq-items* und style diese entsprechend (normales Styling, hover Styling).

2. Zwischenüberlegung: Überlege nun welchen CSS-Code du vewenden kannst im die Antworten nicht sichtbar zu machen und dann bei Einbindung des jeweiligen Style wieder sichtbar machst.

3. Greife in deine JS-Dokument die entsprechenden *faq-items* ab. Iteriere über diese und füge/entferne die entsprechende Klassen zum sichtbar machen/nicht sichtbar machen dem jeweils richtigen Element hinzu. 

Tipp: Klicke ich (click-event) auf das *faq-item* dann wird den Kindern (Tag mit Antwort) des jeweiligen *faq-items* etwas hinzugefügt/entfernt.



## Darkmode Button

1. Schreibe einen Button (HTML,CSS), der gut plaziert ist. 

Tipp: Du kannst dies erstmal nur für eine Seite machen, damit du nur die entsprechenden Elemente dieser Seite auf eine andere Hintergrundfarbe anpassen musst.

2. Der Button zeigt zuerst einen Mond. Wird dieser Button angeklickt,passiert folgendes:
    - Der Inhalt des Buttons ändert sich zur ☀️
    - Die Hintergrundfarbe der Seite ändert sich auf eine dunklere Farbe
    - Die Elemente bekommen der Hintergrundfarbe ebenfalls ein neue Farbe (Beachte auch das hover!)
    - Die Styles werden nicht über JS direkt hinzugefügt. Vielmehr fügt man dem entsprechenden Element eine *class*, die in der CSS gestylt wurde (z.B "lightmode" für den body), hinzu
  
Falls du dich versuchen möchtest alle anderen Seiten auch einen **Darkmode** Button zu vergeben: 
  - Leicht: Schreibe entsprechend für die jeweiligen Seiten eine JS mit den entsprechenden abreifenden Elementen
  - Zusatz: Der Darkmode ist nicht konsistent und wechselt nach der Navigation zu einer neuen Seite wieder auf den normalen Modus. Es gibt die Möglichkeit Zustände mittels eines "Localstorage" oder eines "Cookies" oder eines "Sessionstorage" zu speichern. Informiere dich wie du eine der drei Varianten nutzen kannst und versuche den Farbmodus durch eine Abfrage zu Beginn des JS Dokuments (`document.addEventListener('DOMContentLoaded',...`) zu erfassen und dann den Farbmodus dementsprechend zu setzen




