import os
import subprocess
import sys

def install_and_setup_venv(venv_name='venv'):
    # Check if virtualenv is installed
    try:
        subprocess.check_call([sys.executable, '-m', 'venv', venv_name])
    except subprocess.CalledProcessError:
        print("Failed to create virtual environment. Make sure you have 'venv' module installed.")
        return

    # Activate the virtual environment
    activate_script = os.path.join(venv_name, 'Scripts', 'activate') if os.name == 'nt' else os.path.join(venv_name, 'bin', 'activate')
    
    # Print activation command
    print(f"To activate the virtual environment, run:\nsource {activate_script}")

if __name__ == '__main__':
    install_and_setup_venv()