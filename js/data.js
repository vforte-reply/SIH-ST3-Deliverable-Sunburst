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
        id: '1.AR',
        parent: '0.communication',
        name: 'Augmented Reality',
        value: 1000,
        url: 'https://www.reply.com/it/content/augmented-reality'
    }, {
        id: '1.chatbot',
        parent: '0.communication',
        name: 'Chat Bot',
        value: 2000,
        url: 'https://www.reply.com/it/topics/crm/chatbot-un-nuovo-canale-di-comunicazione-verso-il-cliente'
    }, {
        id: '1.3d-printing',
        parent: '0.communication',
        name: '3D Printing',
        value: 2000,
        url: 'https://www.reply.com/it/3d-printing'
    }, {
        id: '1.VR',
        parent: '0.communication',
        name: 'Virtual Reality',
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
    // TODO
    {
        id: '2.risks-AR',
        parent: '1.AR',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-AR',
        parent: '1.AR',
        name: 'Mitigations',
        value: 10000
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
    // TODO
    {
        id: '2.risks-VR',
        parent: '1.VR',
        name: 'Risks',
        value: 10000
    }, {
        id: '2.mitigations-VR',
        parent: '1.VR',
        name: 'Mitigations',
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