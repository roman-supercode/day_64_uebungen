import fs from "fs";


//    1. Öffne die Datei blog1.txt (fs.
// fs.readFile("blog1.txt", (err, data) => {
//     err ? (console.log("Error Ausgabe von Nr. 1:", err))
//         : (console.log(String(data))); // ohne String wird data als Buffer ausgegeben!
// });

//    2. Ändere den Inhalt (Text) in der Datei blog1.txt
// const inhalt = "Das ist der abgeänderte Text";
// fs.writeFile('blog1.txt', inhalt, ((err) => {
//     err ? (console.log("Error Ausgabe Nr. 2:", err))
//         : (console.log("Inhalt überschrieben!"));
// }));

//    3. Erstelle eine neue Datei „blog2.txt“ und schreibe etwas in sie hinein
// fs.writeFile('blog2.txt', "Hallo du!", { flag: "wx" }, ((err) => {
//     // flag: "wx" gibt einen Error aus, wenn die Datei bereits existiert!
//     err ? (console.log("Error Ausgabe Nr. 3:", err))
//         : (console.log("Datei und Inhalt erstellt!"));
// }));

//    4. Erstelle einen neuen Ordner „assets“.
// fs.mkdir("./assets", ((err) => {
//     err ? (console.log("Error Ausgabe Nr. 4"), err)
//         : (console.log("Ordner erstellt!"));
// }));

//    5. Existiert der Ordner „assets“ bereits? Dann lasse ihn wieder löschen.
// https://stackoverflow.com/a/73837504/20360318
// fs.rm("./assets", { recursive: true, force: true }, ((err) => {
//     err ? (console.log("Error Ausgabe Nr. 5", err))
//         : (console.log("Ordner gelöscht!"));
// }));

//    6. Erstelle eine Datei namens „delete.txt“.
// fs.writeFile("delete.txt", "", { flag: 'wx' }, ((err) => {
//     err ? (console.log("Error Ausgabe Nr. 6", err))
//         : console.log("Datei erstellt!");
// }));

//    7. Lösche die Datei „delete.txt“, wenn sie bereits existiert.
// fs.unlink("./delete.txt", ((err) => {
//     if (err) return console.log("Error Ausgabe Nr. 7", err);
//     console.log("Datei entfernt!");
// }));

//    8. Erstelle eine Datei namens „Hello.txt“ und füge ihr Text hinzu. Benenne sie dann in „HelloWorld.txt“ um.
// fs.writeFile("Hello.txt", "Hello WORLD!", ((err) => {
//     if (err) return console.log("Error Ausgabe Nr. 8", err);
//     console.log("Ordner entfernt!");
// }));

// fs.rename("Hello.txt", "HelloWorld.txt", ((err) => {
//     if (err) return console.log("Error Ausgabe Nr. 8");
//     console.log("Datei unbenannt!");
// }));