#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
One Command Virtual Environment Setup Script
Tự động phát hiện Python command và thiết lập môi trường ảo hoàn chỉnh
Author: ariescasino
Date: 2025-09-16 03:13:19
"""

import os
import sys
import subprocess
import platform
import shutil
from pathlib import Path
import json

class VenvSetupTool:
    def __init__(self):
        self.system = platform.system().lower()
        self.venv_name = "myproject_env"
        self.project_dir = Path.cwd()
        self.venv_dir = self.project_dir / self.venv_name
        
        # Common packages to install
        self.default_packages = [
            "pip", "setuptools", "wheel",
            "requests", "beautifulsoup4", "lxml",
            "flask", "fastapi",
            "numpy", "pandas",
            "pytest", "black",
            "python-dotenv", "pyyaml"
        ]
        
    def log(self, message, level="INFO"):
        """Log với timestamp và màu sắc"""
        import datetime
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        colors = {
            "INFO": "\033[92m",     # Green
            "WARN": "\033[93m",     # Yellow  
            "ERROR": "\033[91m",    # Red
            "RESET": "\033[0m"      # Reset
        }
        color = colors.get(level, colors["RESET"])
        print(f"{color}[{timestamp}] [{level}] {message}{colors['RESET']}")
        
    def run_command(self, command, check=True, shell=True):
        """Chạy lệnh hệ thống với error handling"""
        self.log(f"Executing: {command}")
        try:
            result = subprocess.run(
                command, 
                shell=shell, 
                check=check, 
                capture_output=True, 
                text=True
            )
            if result.stdout:
                print(result.stdout.strip())
            return result
        except subprocess.CalledProcessError as e:
            self.log(f"Command failed: {e}", "ERROR")
            if e.stderr:
                print(e.stderr.strip())
            return None
            
    def find_python_command(self):
        """Tự động tìm Python command có sẵn"""
        self.log("Đang tìm Python command...")
        
        # Danh sách các Python command có thể có
        python_commands = ["python3", "python", "py", "python3.11", "python3.10", "python3.9"]
        
        for cmd in python_commands:
            try:
                result = subprocess.run([cmd, "--version"], capture_output=True, text=True, timeout=10)
                if result.returncode == 0:
                    version = result.stdout.strip()
                    self.log(f"✅ Tìm thấy Python: {cmd} -> {version}")
                    return cmd
            except (FileNotFoundError, subprocess.TimeoutExpired):
                continue
                
        # Nếu không tìm thấy, thử cài đặt
        return self.install_python()
        
    def install_python(self):
        """Cài đặt Python dựa trên hệ điều hành"""
        self.log("Python chưa được cài đặt, tiến hành cài đặt...")
        
        if self.system == "linux":
            return self.install_python_linux()
        elif self.system == "darwin":  # macOS
            return self.install_python_macos()
        elif self.system == "windows":
            return self.install_python_windows()
        else:
            self.log(f"Hệ điều hành không được hỗ trợ: {self.system}", "ERROR")
            return None
            
    def install_python_linux(self):
        """Cài đặt Python trên Linux"""
        self.log("Cài đặt Python trên Linux...")
        
        # Phát hiện Linux distribution
        if shutil.which("apt"):
            # Ubuntu/Debian
            commands = [
                "sudo apt update",
                "sudo apt install -y python3 python3-pip python3-venv python3-dev",
                "sudo apt install -y build-essential libssl-dev libffi-dev"
            ]
        elif shutil.which("yum"):
            # CentOS/RHEL
            commands = [
                "sudo yum update -y",
                "sudo yum install -y python3 python3-pip python3-venv python3-devel"
            ]
        elif shutil.which("dnf"):
            # Fedora
            commands = [
                "sudo dnf update -y", 
                "sudo dnf install -y python3 python3-pip python3-venv python3-devel"
            ]
        elif shutil.which("pacman"):
            # Arch Linux
            commands = [
                "sudo pacman -Sy python python-pip"
            ]
        else:
            self.log("Không nhận dạng được Linux distribution", "ERROR")
            return None
            
        for cmd in commands:
            result = self.run_command(cmd, check=False)
            if result is None:
                self.log(f"Lỗi khi chạy: {cmd}", "WARN")
                
        return "python3"
        
    def install_python_macos(self):
        """Cài đặt Python trên macOS"""
        self.log("Cài đặt Python trên macOS...")
        
        # Kiểm tra Homebrew
        if shutil.which("brew"):
            self.run_command("brew install python@3.11")
        else:
            # Cài đặt Homebrew trước
            self.log("Cài đặt Homebrew...")
            homebrew_install = '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
            self.run_command(homebrew_install)
            self.run_command("brew install python@3.11")
            
        return "python3"
        
    def install_python_windows(self):
        """Cài đặt Python trên Windows"""
        self.log("Cài đặt Python trên Windows...")
        self.log("Vui lòng tải và cài đặt Python từ: https://www.python.org/downloads/", "WARN")
        self.log("Hoặc sử dụng winget: winget install Python.Python.3.11", "INFO")
        return "python"
        
    def create_virtual_environment(self, python_cmd):
        """Tạo môi trường ảo"""
        self.log(f"Tạo môi trường ảo: {self.venv_name}")
        
        # Xóa môi trường ảo cũ nếu tồn tại
        if self.venv_dir.exists():
            self.log("Xóa môi trường ảo cũ...")
            shutil.rmtree(self.venv_dir)
            
        # Tạo môi trường ảo mới
        create_cmd = f"{python_cmd} -m venv {self.venv_dir}"
        result = self.run_command(create_cmd)
        
        if result and result.returncode == 0:
            self.log("✅ Môi trường ảo đã được tạo thành công!")
            return True
        else:
            self.log("❌ Lỗi tạo môi trường ảo", "ERROR")
            return False
            
    def get_python_executable(self):
        """Lấy đường dẫn Python executable trong venv"""
        if self.system == "windows":
            return self.venv_dir / "Scripts" / "python.exe"
        else:
            return self.venv_dir / "bin" / "python"
            
    def get_activation_script(self):
        """Lấy script kích hoạt môi trường ảo"""
        if self.system == "windows":
            return self.venv_dir / "Scripts" / "activate.bat"
        else:
            return self.venv_dir / "bin" / "activate"
            
    def install_packages(self):
        """Cài đặt packages cần thiết"""
        self.log("Cài đặt packages...")
        
        python_exe = self.get_python_executable()
        
        # Upgrade pip trước
        upgrade_pip = f"{python_exe} -m pip install --upgrade pip"
        self.run_command(upgrade_pip)
        
        # Cài đặt từng package
        for package in self.default_packages:
            install_cmd = f"{python_exe} -m pip install {package}"
            self.log(f"Cài đặt {package}...")
            result = self.run_command(install_cmd, check=False)
            if result and result.returncode == 0:
                self.log(f"✅ {package} đã được cài đặt")
            else:
                self.log(f"⚠️  Lỗi cài đặt {package}", "WARN")
                
    def create_activation_script(self):
        """Tạo script kích hoạt dễ sử dụng"""
        self.log("Tạo activation scripts...")
        
        if self.system == "windows":
            script_content = f"""@echo off
echo Activating Python Virtual Environment: {self.venv_name}
call "{self.get_activation_script()}"
echo ✅ Environment activated! Python path: %VIRTUAL_ENV%
echo 💡 Type 'deactivate' to exit the environment
cmd /k
"""
            script_path = self.project_dir / "activate_venv.bat"
        else:
            script_content = f"""#!/bin/bash
echo "🚀 Activating Python Virtual Environment: {self.venv_name}"
source "{self.get_activation_script()}"
echo "✅ Environment activated! Python path: $VIRTUAL_ENV"
echo "💡 Type 'deactivate' to exit the environment"
exec bash --rcfile <(echo '. ~/.bashrc; PS1="({self.venv_name}) $PS1"')
"""
            script_path = self.project_dir / "activate_venv.sh"
            
        with open(script_path, 'w') as f:
            f.write(script_content)
            
        # Make executable on Unix systems
        if self.system != "windows":
            os.chmod(script_path, 0o755)
            
        self.log(f"✅ Activation script created: {script_path}")
        return script_path
        
    def create_project_structure(self):
        """Tạo cấu trúc project"""
        self.log("Tạo cấu trúc project...")
        
        directories = ["src", "tests", "docs", "scripts", "data", "logs"]
        
        for dir_name in directories:
            dir_path = self.project_dir / dir_name
            dir_path.mkdir(exist_ok=True)
            
            if dir_name in ["src", "tests"]:
                init_file = dir_path / "__init__.py"
                init_file.touch()
                
        # Tạo main.py
        main_py_content = '''#!/usr/bin/env python3
"""
Main application entry point
"""

def main():
    print("🎉 Hello from your new Python project!")
    print("✅ Virtual environment is working correctly!")
    
    # Test imports
    try:
        import requests
        print("✅ requests module imported successfully")
    except ImportError:
        print("❌ requests module not found")
        
    try:
        import bs4
        print("✅ beautifulsoup4 module imported successfully")
    except ImportError:
        print("❌ beautifulsoup4 module not found")

if __name__ == "__main__":
    main()
'''
        
        main_py_path = self.project_dir / "main.py"
        with open(main_py_path, 'w') as f:
            f.write(main_py_content)
            
        self.log("✅ Project structure created!")
        
    def create_requirements_file(self):
        """Tạo requirements.txt"""
        self.log("Tạo requirements.txt...")
        
        python_exe = self.get_python_executable()
        freeze_cmd = f"{python_exe} -m pip freeze"
        
        result = self.run_command(freeze_cmd)
        if result:
            requirements_path = self.project_dir / "requirements.txt"
            with open(requirements_path, 'w') as f:
                f.write(result.stdout)
            self.log(f"✅ Requirements file created: {requirements_path}")
            
    def test_installation(self):
        """Test môi trường ảo"""
        self.log("Testing virtual environment...")
        
        python_exe = self.get_python_executable()
        
        # Test Python
        test_cmd = f"{python_exe} --version"
        result = self.run_command(test_cmd)
        
        if result and result.returncode == 0:
            self.log("✅ Python test passed")
        else:
            self.log("❌ Python test failed", "ERROR")
            return False
            
        # Test main.py
        main_test_cmd = f"{python_exe} main.py"
        result = self.run_command(main_test_cmd)
        
        if result and result.returncode == 0:
            self.log("✅ Main.py test passed")
        else:
            self.log("❌ Main.py test failed", "ERROR")
            
        return True
        
    def show_completion_info(self, activation_script):
        """Hiển thị thông tin hoàn thành"""
        separator = "=" * 70
        
        completion_info = f"""
{separator}
🎉 PYTHON VIRTUAL ENVIRONMENT SETUP COMPLETED! 🎉
{separator}

📁 Project Directory: {self.project_dir}
🐍 Virtual Environment: {self.venv_name}
📦 Packages Installed: {len(self.default_packages)} packages

🚀 QUICK START:

1. 🔥 Activate Environment:
   {activation_script}

2. ▶️  Run Application:
   python main.py

3. 📦 Install More Packages:
   pip install package_name

4. 🔌 Deactivate Environment:
   deactivate

📂 FILES CREATED:
✅ Virtual environment: {self.venv_name}/
✅ Main script: main.py
✅ Requirements: requirements.txt
✅ Project structure: src/, tests/, docs/, scripts/, data/, logs/
✅ Activation script: {activation_script.name}

🔧 USEFUL COMMANDS:
• pip list                         # List installed packages
• pip freeze > requirements.txt    # Update requirements
• pip install -r requirements.txt  # Install from requirements

🌟 Your Python development environment is ready! 🌟

{separator}
"""
        print(completion_info)
        
    def run_setup(self):
        """Chạy toàn bộ quá trình setup"""
        try:
            import datetime
            
            print("""
╔═══════════════════════════════════════════════════════════════════╗
║                ONE COMMAND PYTHON VENV SETUP TOOL                ║
║                       by ariescasino                             ║
╚═══════════════════════════════════════════════════════════════════╝
            """)
            
            self.log("🚀 Bắt đầu setup môi trường Python...")
            
            # 1. Tìm Python command
            python_cmd = self.find_python_command()
            if not python_cmd:
                self.log("❌ Không thể tìm thấy hoặc cài đặt Python", "ERROR")
                return False
                
            # 2. Tạo virtual environment
            if not self.create_virtual_environment(python_cmd):
                return False
                
            # 3. Cài đặt packages
            self.install_packages()
            
            # 4. Tạo project files
            self.create_project_structure()
            self.create_requirements_file()
            
            # 5. Tạo activation script
            activation_script = self.create_activation_script()
            
            # 6. Test installation
            self.test_installation()
                
            # 7. Hiển thị thông tin hoàn thành
            self.show_completion_info(activation_script)
            
            self.log("✅ Setup hoàn tất thành công!")
            return True
            
        except KeyboardInterrupt:
            self.log("❌ Setup bị hủy bởi người dùng", "WARN")
            return False
        except Exception as e:
            self.log(f"❌ Lỗi trong quá trình setup: {str(e)}", "ERROR")
            import traceback
            traceback.print_exc()
            return False

def main():
    """Main function - Entry point"""
    import argparse
    
    parser = argparse.ArgumentParser(description='One command Python virtual environment setup')
    parser.add_argument('--name', '-n', default='myproject_env', help='Virtual environment name')
    parser.add_argument('--packages', '-p', nargs='*', help='Additional packages to install')
    
    args = parser.parse_args()
    
    setup_tool = VenvSetupTool()
    setup_tool.venv_name = args.name
    setup_tool.venv_dir = setup_tool.project_dir / setup_tool.venv_name
    
    if args.packages:
        setup_tool.default_packages.extend(args.packages)
        
    # Run setup
    success = setup_tool.run_setup()
    
    if success:
        print("\n🎉 Success! Your Python environment is ready to use!")
        sys.exit(0)
    else:
        print("\n❌ Setup failed. Please check the error messages above.")
        sys.exit(1)

if __name__ == "__main__":
    main()