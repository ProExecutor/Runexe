import subprocess

# replace 'your_file.exe' with your actual file path
exe_path = 'kincaid.exe'

# create a Popen object
process = subprocess.Popen(exe_path, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

# wait for the process to complete
stdout, stderr = process.communicate()

# print the output
print(stdout)
