var data = [
    // TOPICS
    {
        id: '0.infrastructure',
        parent: '',
        name: 'Infrastructure',
        color: '#a569bd'
    }, {
        id: '0.communication',
        parent: '',
        name: 'Communication',
        color: '#5dade2'
    }, {
        id: '0.data',
        parent: '',
        name: 'Data',
        color: '#FF7F50'
    }, {
        id: '0.iot',
        parent: '',
        name: 'Automated and connected systems',
        color: '#58d68d'
    },
    // INNOVATIVE TECHNOLOGIES
    // Infrastructure
    {
        id: '1.5G',
        parent: '0.infrastructure',
        name: '5G',
        value: 2000,
        url: 'https://www.reply.com/it/industries/telco-and-media/5g-mastering-the-magic-triangle'
    }, {
        id: '1.blockchain',
        parent: '0.infrastructure',
        name: 'Blockchain',
        value: 2000,
        url: 'https://www.reply.com/it/blockchain'
    }, {
        id: '1.edge-computing',
        parent: '0.infrastructure',
        name: 'Edge Computing',
        value: 2000,
        url: 'https://www.reply.com/cluster-reply/it/content/edge-computing-con-azure'
    },
    // Communication
    {
        id: '1.chatbot',
        parent: '0.communication',
        name: 'Chat Bot',
        value: 2000,
        url: 'https://www.reply.com/it/topics/crm/chatbot-un-nuovo-canale-di-comunicazione-verso-il-cliente'
    },

    //3D printing
    {
        id: '1.3d-printing',
        parent: '0.communication',
        name: '3D Printing',
        value: 2000,
        url: 'https://www.reply.com/it/3d-printing'
    }, {
        id: '1.VR_AR',
        parent: '0.communication',
        name: 'Virtual Reality/Augmented Reality',
        value: 3000,
        url: 'https://www.reply.com/it/centro-realta-virtuale-e-aumentata'
    },
    // Data
    {
        id: '1.big-data',
        parent: '0.data',
        name: 'Big Data Analytics',
        value: 1000,
        url: 'https://www.reply.com/data-reply/it/'
    }, {
        id: '1.quantum',
        parent: '0.data',
        name: 'Quantum Computing',
        value: 3000,
        url: 'https://www.reply.com/it/topics/quantum-computing/'
    },
    // Automated and connected systems
    {
        id: '1.ai',
        parent: '0.iot',
        name: 'Artificial Intelligence',
        value: 1000,
        url: 'https://www.reply.com/machine-learning-reply/it/'
    }, {
        id: '1.rpa',
        parent: '0.iot',
        name: 'Robot Process Automation',
        value: 1000,
        url: 'https://www.reply.com/it/topics/big-data-and-analytics/rpa-launch-your-digital-transformation'
    }, {
        id: '1.self-driving',
        parent: '0.iot',
        name: 'Self-driving Vehicles',
        value: 3000,
        url: 'https://www.reply.com/en/newsroom/news/the-autonomous-things-trend-research-study-shows-the-evolution-from-automation-to-autonomous-things'
    },

    // DETAILS
    // 5G
    {
        id: '2.risks-5G',
        parent: '1.5G',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-5G',
        parent: '1.5G',
        name: 'Mitigations',
        value: 10000
    },
    // Blockchain
    {
        id: '2.risks-blockchain',
        parent: '1.blockchain',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-blockchain',
        parent: '1.blockchain',
        name: 'Mitigations',
        value: 10000
    },

    //blockchain risks

    {
        id: '2.1_risks-blockchain',
        parent: '2.risks-blockchain',
        name: 'Endpoint vulnerabilities',
        value: 10000
    }, {
        id: '2.2_risks-blockchain',
        parent: '2.risks-blockchain',
        name: 'Untested code',
        value: 10000
    }, {
        id: '2.3_risks-blockchain',
        parent: '2.risks-blockchain',
        name: 'The on-ramp',
        value: 10000
    }, {
        id: '2.4_risks-blockchain',
        parent: '2.risks-blockchain',
        name: 'Stolen keys',
        value: 10000
    },

    {
        id: '2.5_risks-blockchain',
        parent: '2.risks-blockchain',
        name: '51% attacks',
        value: 10000
    },

    {
        id: '2.6_risks-blockchain',
        parent: '2.risks-blockchain',
        name: 'Sybil attacks',
        value: 10000
    },

    {
        id: '2.7_risks-blockchain',
        parent: '2.risks-blockchain',
        name: 'Routing attacks',
        value: 10000
    },

    //blockchain mitigation             
    {
        id: '2.1_mitigation-blockchain',
        parent: '2.mitigations-blockchain',
        name: 'Identity and access management',
        value: 10000
    },

    {
        id: '2.2_mitigation-blockchain',
        parent: '2.mitigations-blockchain',
        name: 'Key management',
        value: 10000
    },

    {
        id: '2.3_mitigation-blockchain',
        parent: '2.mitigations-blockchain',
        name: 'Data privacy',
        value: 10000
    },

    {
        id: '2.4_mitigation-blockchain',
        parent: '2.mitigations-blockchain',
        name: 'Secure communication',
        value: 10000
    },

    {
        id: '2.5_mitigation-blockchain',
        parent: '2.mitigations-blockchain',
        name: 'Smart contract security',
        value: 10000
    },

    {
        id: '2.6_mitigation-blockchain',
        parent: '2.mitigations-blockchain',
        name: 'Transaction endorsement',
        value: 10000
    },

    // Edge Computing
    {
        id: '2.risks-edge-computing',
        parent: '1.edge-computing',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-edge-computing',
        parent: '1.edge-computing',
        name: 'Mitigations',
        value: 10000
    },

    //edge computing risks

    {
        id: '2.1_risks-edge-computing',
        parent: '2.risks-edge-computing',
        name: 'DDoS Attack (Flooding Attacks, Zero-Day Attacks) ',
        value: 10000
    }, {
        id: '2.2_risks-edge-computing',
        parent: '2.risks-edge-computing',
        name: 'Side Channel Attack (Communication Channel, Power Consuption, Smartphone Based)',
        value: 10000
    }, {
        id: '2.3_risks-edge-computing',
        parent: '2.risks-edge-computing',
        name: 'Malware Injection Attacks (Server-Side Injection, Device-Side Injection)',
        value: 10000
    }, {
        id: '2.4_risks-edge-computing',
        parent: '2.risks-edge-computing',
        name: 'Authentication and Authorization Attacks',
        value: 10000
    },

    //edge computing mitigation             
    {
        id: '2.5_risks-edge-computing',
        parent: '2.mitigations-edge-computing',
        name: 'Data perturbation and differential privacy',
        value: 10000,
        url: './template.html',
        type: "mitigation",
        description: "Questa è una descrizione della tecnica di mitigazione Data perturbation and differential privacy",
        links: [
            '2.2_risks-edge-computing'
        ]
    },
    {
        id: '2.3_mitigation-edge-computing',
        parent: '2.mitigations-edge-computing',
        name: 'Static analysis for malicious code detection and fine-grained access control',
        value: 10000,
        url: './template.html',
        type: "mitigation",
        description: "Questa è una descrizione della tecnica di mitigazione Static analysis",
        links: [
            '2.3_risks-edge-computing'
        ]
    },
    {
        id: '2.4_mitigation-edge-computing',
        parent: '2.mitigations-edge-computing',
        name: 'Addition of one more layer of authentication (e.g., two-factor authentication)',
        value: 10000,
        url: './template.html',
        type: "mitigation",
        description: "Questa è una descrizione della tecnica di autenticazione a più fattori",
        links: [
            '2.4_risks-edge-computing'
        ]
    },

    // Chat Bot
    {
        id: '2.risks-chatbot',
        parent: '1.chatbot',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-chatbot',
        parent: '1.chatbot',
        name: 'Mitigations',
        value: 10000
    },

    //chatbot risks

    {
        id: '2.1_risks-chatbot',
        parent: '2.risks-chatbot',
        name: 'Spoofing/impersonating someone else',
        value: 10000
    }, {
        id: '2.2_risks-chatbot',
        parent: '2.risks-chatbot',
        name: 'Tampering of data',
        value: 10000
    }, {
        id: '2.3_risks-chatbot',
        parent: '2.risks-chatbot',
        name: 'Data theft',
        value: 10000
    }, {
        id: '2.4_risks-chatbot',
        parent: '2.risks-chatbot',
        name: 're-purposing of bots by hackers',
        value: 10000
    },
    {
        id: '2.5_risks-chatbot',
        parent: '2.risks-chatbot',
        name: 'phishing/whaling',
        value: 10000
    },
    {
        id: '2.6_risks-chatbot',
        parent: '2.risks-chatbot',
        name: 'ransomware, malware',
        value: 10000
    },

    //mitigation chatbot            
    {
        id: '2.1_mitigation-chatbot',
        parent: '2.mitigations-chatbot',
        name: '2FA with Biometric',
        value: 10000
    }, {
        id: '2.2_mitigation-chatbot',
        parent: '2.mitigations-chatbot',
        name: 'Authentication Timeouts',
        value: 10000
    }, {
        id: '2.3_mitigation-chatbot',
        parent: '2.mitigations-chatbot',
        name: 'Messages That Self-Destruct',
        value: 10000
    }, {
        id: '2.4_mitigation-chatbot',
        parent: '2.mitigations-chatbot',
        name: 'End to end encryption',
        value: 10000
    },

    // 3D printing
    {
        id: '2.risks-3d-printing',
        parent: '1.3d-printing',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-3d-printing',
        parent: '1.3d-printing',
        name: 'Mitigations',
        value: 10000
    },

    //3D printing risks

    {
        id: '2.1_risks-3d-printing',
        parent: '2.risks-3d-printing',
        name: 'software vulnerabilities',
        value: 10000
    }, {
        id: '2.2_risks-3d-printing',
        parent: '2.risks-3d-printing',
        name: 'Network exposure',
        value: 10000
    }, {
        id: '2.3_risks-3d-printing',
        parent: '2.risks-3d-printing',
        name: 'Final product damange',
        value: 10000
    }, {
        id: '2.4_risks-3d-printing',
        parent: '2.risks-3d-printing',
        name: 'COnfidential and privacy concerns',
        value: 10000
    },

    //mitigation 3D printing

    {
        id: '2.1_mitigations-3d-printing',
        parent: '2.mitigations-3d-printing',
        name: 'Secure digital design and code',
        value: 10000
    }, {
        id: '2.2_mitigations-3d-printing',
        parent: '2.mitigations-3d-printing',
        name: 'Secure acoustic measurements',
        value: 10000
    }, {
        id: '2.3_mitigations-3d-printing',
        parent: '2.mitigations-3d-printing',
        name: 'Verify printer component tracking',
        value: 10000
    }, {
        id: '2.4_mitigation-3d-printing',
        parent: '2.mitigations-3d-printing',
        name: 'Secure deteclable nanorods',
        value: 10000
    },



    // VR/AR
    {
        id: '2.risks-VR_AR',
        parent: '1.VR_AR',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-VR_AR',
        parent: '1.VR_AR',
        name: 'Mitigations',
        value: 10000
    },

    //VR_AR risks

    {
        id: '2.1_risks-VR_AR',
        parent: '2.risks-VR_AR',
        name: 'Eye Tracking',
        value: 10000
    }, {
        id: '2.2_risks-VR_AR',
        parent: '2.risks-VR_AR',
        name: 'Blackmailing / Sextorsion',
        value: 10000
    }, {
        id: '2.3_risks-VR_AR',
        parent: '2.risks-VR_AR',
        name: 'Fake identities / Deepfakes',
        value: 10000
    }, {
        id: '2.4_risks-VR_AR',
        parent: '2.risks-VR_AR',
        name: 'Unencrypted data usage',
        value: 10000
    },

    {
        id: '2.5_risks-VR_AR',
        parent: '2.risks-VR_AR',
        name: 'Mirai malware',
        value: 10000
    },

    //mitigation VR_AR

    {
        id: '2.1_mitigation-VR_AR',
        parent: '2.mitigations-VR_AR',
        name: 'Usage of private mode',
        value: 10000
    }, {
        id: '2.2_mitigation-VR_AR',
        parent: '2.mitigations-VR_AR',
        name: 'Identity management',
        value: 10000
    }, {
        id: '2.3_mitigation-VR_AR',
        parent: '2.mitigations-VR_AR',
        name: 'Authentication systems',
        value: 10000
    },




    // TODO
    {
        id: '2.risks-big-data',
        parent: '1.big-data',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-big-data',
        parent: '1.big-data',
        name: 'Mitigations',
        value: 10000
    },
    // Quantum Computing
    {
        id: '2.risks-quantum',
        parent: '1.quantum',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-quantum',
        parent: '1.quantum',
        name: 'Mitigations',
        value: 10000
    },
    //Qauntum computing risks
    {
        id: '2.1_risks-quantum',
        parent: '2.risks-quantum',
        name: 'Asymmetric encryption breaking (Shor\'s Algorithm)',
        value: 10000
    }, {
        id: '2.2_risks-quantum',
        parent: '2.risks-quantum',
        name: 'Symmetric encryption breaking (Grover’s algorithm)',
        value: 10000
    },
    //quantum computing mitigation

    {
        id: '2.1_mitigation-quantum',
        parent: '2.mitigations-quantum',
        name: 'Quantum-safe Cryptography',
        value: 10000
    }, {
        id: '2.2_mitigation-quantum',
        parent: '2.mitigations-quantum',
        name: 'Quantum Key Distribution',
        value: 10000
    }, {
        id: '2.3_mitigation-quantum',
        parent: '2.mitigations-quantum',
        name: 'Quantum Random Generator',
        value: 10000
    },

    // Artificial Intelligence
    {
        id: '2.risks-ai',
        parent: '1.ai',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-ai',
        parent: '1.ai',
        name: 'Mitigations',
        value: 10000
    },
    // Robot Process Automation
    {
        id: '2.risks-rpa',
        parent: '1.rpa',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-rpa',
        parent: '1.rpa',
        name: 'Mitigations',
        value: 10000
    },
    // Self-Driving Vehicles
    {
        id: '2.risks-self-driving',
        parent: '1.self-driving',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-self-driving',
        parent: '1.self-driving',
        name: 'Mitigations',
        value: 10000
    },

    //risk self driving cars

    {
        id: '2.1_risks-self-driving',
        parent: '2.risks-self-driving',
        name: 'Attacks on Smart Remote Keys',
        value: 10000
    }, {
        id: '2.2_risks-self-driving',
        parent: '2.risks-self-driving',
        name: 'Attacks on Cloud-Based Networks',
        value: 10000
    }, {
        id: '2.3_risks-self-driving',
        parent: '2.risks-self-driving',
        name: 'Sensors attacks',
        value: 10000
    }, {
        id: '2.4_risks-self-driving',
        parent: '2.risks-self-driving',
        name: 'Vehicle to Vehicle (V2V) Network Attacks',
        value: 10000
    }, {
        id: '2.5_risks-self-driving',
        parent: '2.risks-self-driving',
        name: 'Vehicle to Infrastructure (V2I) Network Attacks',
        value: 10000
    }, {
        id: '2.6_risks-self-driving',
        parent: '2.risks-self-driving',
        name: 'OBD (On Board Debug) Port-based attack',
        value: 10000
    }, {
        id: '2.7_risks-self-driving',
        parent: '2.risks-self-driving',
        name: 'USB/Bluetooth Attack',
        value: 10000
    },

    //mitigation self driving cars

    {
        id: '2.1_mitigation-self-driving',
        parent: '2.mitigations-self-driving',
        name: 'OTA updates',
        value: 10000
    }, {
        id: '2.2_mitigation-self-driving',
        parent: '2.mitigations-self-driving',
        name: 'Intrusion Detection and Prevention System (IDPS)',
        value: 10000
    }, {
        id: '2.3_mitigation-self-driving',
        parent: '2.mitigations-self-driving',
        name: 'Detection and reaction system (VSOC)',
        value: 10000
    }, {
        id: '2.2_mitigation-self-driving',
        parent: '2.mitigations-self-driving',
        name: 'AI/ML systems',
        value: 10000
    },
    // RESIDUAL RISKS
    // Artificial Intelligence
    {
        id: '3.1.ai-privacy-violation',
        parent: '2.risks-ai',
        name: 'Privacy violations',
        value: 10000,
        url: './template.html',
        type: "risk",
        description: "Questa è una descrizione di RISK",
        links: [
            '3.2.ai-data-sanitization',
            '3.2.ai-anomaly-detection'
        ]
    }, {
        id: '3.2',
        parent: '2.risks-ai',
        name: 'Transfer Learning Attack',
        value: 10000
    }, {
        id: '3.3',
        parent: '2.risks-ai',
        name: 'Deepfakes',
        value: 10000
    }, {
        id: '3.4',
        parent: '2.risks-ai',
        name: 'Fooling the System',
        value: 10000
    }, {
        id: '3.5',
        parent: '2.risks-ai',
        name: 'Data Poisoning',
        value: 10000
    }, {
        id: '3.6',
        parent: '2.risks-ai',
        name: 'Manipulation of Online Systems',
        value: 10000
    }, {
        id: '3.7',
        parent: '2.risks-ai',
        name: 'Transfer Learning Attack',
        value: 10000
    }, {
        id: '3.8',
        parent: '2.risks-ai',
        name: 'Data Privacy and Confidentiality',
        value: 10000
    }, {
        id: '3.2.ai-data-sanitization',
        parent: '2.mitigations-ai',
        name: 'Data sanitizaton',
        value: 10000,
        url: './template.html',
        type: "mitigation",
        description: "Questa è una descrizione di MITIGATION",
        links: [
            '3.1.ai-privacy-violation'
        ]
    }, {
        id: '3.2.ai-anomaly-detection',
        parent: '2.mitigations-ai',
        name: 'Input Anomaly Detection',
        value: 10000,
        url: './template.html',
        type: "mitigation",
        description: "Questa è una descrizione di MITIGATION",
        links: [
            '3.1.ai-privacy-violation'
        ]
    }

];