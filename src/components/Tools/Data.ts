import React from 'react';
import { Pill, Heart, Calculator, AlertCircle, Brain, Activity, Droplets, Plus, Wind, Smartphone } from "lucide-react";

export const tools = [
    {
        slug: "antibiotic-decision-tool",
        title: "Antibiotic Decision Tool",
        desc: "Determine appropriateness of antibiotic therapy in hospice care",
        icon: React.createElement(Pill, { size: 24 }),
    },
    {
        slug: "anticoagulation-decision-tool",
        title: "Anticoagulation Decision Tool",
        desc: "Evidence-based guidance for anticoagulation in hospice patients",
        icon: React.createElement(Heart, { size: 24 }),
    },
    {
        slug: "buprenorphine-decision-tool",
        title: "Buprenorphine Decision Tool",
        desc: "Guidance for buprenorphine management in hospice patients",
        icon: React.createElement(Smartphone, { size: 24 }),
    },
    {
        slug: "crushability-tool",
        title: "Crushability / Do Not Crush Tool",
        desc: "Comprehensive medication crushability reference database",
        icon: React.createElement(AlertCircle, { size: 24 }),
    },
    {
        slug: "delirium-management-tool",
        title: "Delirium Management Tool",
        desc: "Assessment and management of delirium in hospice patients",
        icon: React.createElement(Brain, { size: 24 }),
    },
    {
        slug: "ketamine-consideration-tool",
        title: "Ketamine Consideration Tool",
        desc: "Clinical decision support for ketamine use in refractory pain",
        icon: React.createElement(Activity, { size: 24 }),
    },
    {
        slug: "methadone-calculator",
        title: "Methadone Calculator",
        desc: "Safe methadone conversion with dosing guidelines and risk stratification",
        icon: React.createElement(Calculator, { size: 24 }),
    },
    {
        slug: "nausea-management-tool",
        title: "Nausea Management Tool",
        desc: "Evidence-based approach to nausea and vomiting management",
        icon: React.createElement(Droplets, { size: 24 }),
    },
    {
        slug: "palliative-performance-scale-tool",
        title: "Palliative Performance Scale Tool",
        desc: "Standardized assessment tool for functional status",
        icon: React.createElement(Plus, { size: 24 }),
    },
    {
        slug: "respiratory-therapy-interchange-tool",
        title: "Respiratory Therapy Interchange Tool",
        desc: "Optimize respiratory medications and delivery methods",
        icon: React.createElement(Wind, { size: 24 }),
    },
    {
        slug: "secretion-management-tool",
        title: "Secretion Management Tool",
        desc: "Protocol-based approach to respiratory secretion management",
        icon: React.createElement(Wind, { size: 24 }),
    },
    {
        slug: "seizure-management-tool",
        title: "Seizure Management Tool",
        desc: "Emergency and maintenance seizure management protocols",
        icon: React.createElement(Brain, { size: 24 }),
    },
];
