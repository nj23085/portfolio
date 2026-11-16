"""Run the portfolio locally.

Usage:  python run.py          (or: python3 run.py)
Stop:   press Ctrl+C in the terminal
"""
import http.server
import os
import socketserver
import threading
import webbrowser

ROOT = os.path.dirname(os.path.abspath(__file__))
START_PORT = 8000


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, fmt, *args):
        pass  # keep the terminal clean


def main():
    socketserver.TCPServer.allow_reuse_address = True
    port = START_PORT
    while True:
        try:
            server = socketserver.TCPServer(("127.0.0.1", port), Handler)
            break
        except OSError:
            port += 1  # port busy, try the next one
            if port > START_PORT + 50:
                raise SystemExit("Could not find a free port.")

    url = f"http://127.0.0.1:{port}"
    print("\n  Nayan Jain - Portfolio")
    print(f"  Open this link:  {url}")
    print("  Press Ctrl+C to stop.\n")
    threading.Timer(0.6, lambda: webbrowser.open(url)).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n  Stopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
