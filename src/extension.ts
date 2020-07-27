// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import checker from "./utils/checkers";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "exallenge-checker" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "exallenge-checker.helloWorld",
    () => {
      console.log(vscode.workspace.rootPath);
      console.log(vscode.window.activeTextEditor.document.uri.fsPath);
      vscode.workspace
        .openTextDocument(vscode.window.activeTextEditor.document.uri.fsPath)
        .then((document) => {
          let text = document.getText();
          console.log(text);
          checker(
            vscode.window.activeTextEditor.document.uri.fsPath,
            vscode.window.activeTextEditor.document.uri.fsPath,
            text
          );
        });
      // The code you place here will be executed every time your command is executed
      var spawn = require("child_process").spawn;

      console.log("Spawning child process");

      var child = spawn("ls", ["-la"]);

      child.on("exit", function () {
        clearTimeout(to);
        console.log("Child exited!");
      });

      child.stdout.on("data", function (data: any) {
        console.log("stdout: " + data);
        vscode.window.showInformationMessage(data);
      });

      child.stderr.on("data", function (data: any) {
        console.log("stderr: " + data);
      });

      var to = setTimeout(function () {
        console.log("Sending sigkill");
        child.kill();
      }, 2000);
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hello World from exallenge-checker!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
