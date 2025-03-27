Folder strucuture

smart-shelf-system/ 
│── backend/               # FastAPI backend
│   ├── main.py            # API routes, handles requests from frontend & Raspberry Pis
│   ├── expiry_logic.py    # Determines item colors based on expiry date
│   ├── config.py          # General backend settings
│   ├── scanner_api/       # API endpoint to receive expiry dates from Raspberry Pi
│   ├── store_map/         # Handles store layout mapping
│   ├── requirements.txt   # Python dependencies for backend
│
│── frontend/              # Next.js frontend
│   ├── pages/             # Next.js routes
│   ├── components/        # UI components (shelves, slots)
│   ├── public/            # Static assets (icons, images)
│   ├── styles/            # CSS / Tailwind styles
│   ├── utils/             # Helper functions
│   ├── package.json       # Dependencies for frontend
│
│── raspberry_pi/          # Raspberry Pi code (separate module)
│   ├── rpi_main.py        # Main script for scanning and sending expiry dates
│   ├── config.py          # Raspberry Pi ID, scanner mappings
│   ├── scanner_config.json  # Mapping of slots to scanner USB ports
│   ├── requirements.txt   # Python dependencies for Raspberry Pi
│
│── docs/                  # Documentation
│   ├── setup_guide.md     # Steps to set up Raspberry Pi and system
│   ├── API_docs.md        # Backend API documentation
│
│── README.md              # Project overview and setup instructions
