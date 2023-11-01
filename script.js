const { exec } = require('child_process');

// Replace 'path_to_java_file' with the path to your Java file
const javaFilePath = 'script.java';

exec(`javac ${javaFilePath}.java`, (error) => {
  if (error) {
    console.error(`Could not compile Java file: ${error}`);
    return;
  }

  exec(`java ${javaFilePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running Java file: ${error}`);
      return;
    }

    if (stderr) {
      console.error(`Java process stderr: ${stderr}`);
      return;
    }

    console.log(`Java process stdout: ${stdout}`);
  });
});
