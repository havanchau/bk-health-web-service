import sys

def main():
    # Lấy tham số từ command-line
    arg1 = sys.argv[1] if len(sys.argv) > 1 else "No argument"
    arg2 = sys.argv[2] if len(sys.argv) > 2 else "No argument"
    
    # Xử lý logic
    print(f"Received arguments: {arg1}, {arg2}")
    print("Hello from Python script!")

if __name__ == "__main__":
    main()
