'use client';

import React, { useState } from 'react';
import { LOGISTICS_DEMO_PLACEHOLDER } from '../logisticsSoftwareData';
import { getImgSrc } from '../../../utils/image';
import './LogisticsIntegrations.css';

export interface IntegrationNode {
  id: string;
  name: string;
  category: string;
  protocols: string;
}

export interface LogisticsIntegrationsProps {
  id?: string;
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
  nodes?: IntegrationNode[];
}

const DEFAULT_INTEGRATION_NODES: IntegrationNode[] = [
  { id: 'erp', name: 'ERP Systems', category: 'SAP, Oracle, NetSuite', protocols: 'Bidirectional sync' },
  { id: 'crm', name: 'CRM Platforms', category: 'Salesforce, HubSpot', protocols: 'Account & contract sync' },
  { id: 'tms-wms', name: 'TMS & WMS', category: 'Manhattan, Infor', protocols: 'EDI 204 / 214 / 856' },
  { id: 'telematics', name: 'GPS & Telematics', category: 'AIS-140, OBD-II, CAN', protocols: 'Live 10s GPS stream' },
  { id: 'iot', name: 'IoT Devices', category: 'Cold-Chain & RFID', protocols: 'MQTT / BLE telemetry' },
  { id: 'maps', name: 'Maps & Routing', category: 'Google Maps, HERE', protocols: 'Turn-by-turn & geocode' },
  { id: 'ecommerce', name: 'E-Commerce', category: 'Shopify, Magento', protocols: 'Webhooks & stock balance' },
  { id: 'carriers', name: 'Carrier APIs', category: 'FedEx, DHL, BlueDart', protocols: 'Tender & ePOD manifests' },
];

export const LogisticsIntegrations: React.FC<LogisticsIntegrationsProps> = ({
  id = 'logistics-integrations',
  badge = 'Integration Architecture',
  title = (
    <>
      Connect Your Entire <span className="wk-logistics-int__title-accent">Logistics Ecosystem</span>
    </>
  ),
  subtitle = 'Unify your ERP, telematics, warehouse sensors, and carrier networks into a synchronized central data hub.',
  nodes = DEFAULT_INTEGRATION_NODES,
}) => {
  const [activeNodeId, setActiveNodeId] = useState<string>(nodes[0]?.id || '');

  return (
    <section id={id} className="wk-logistics-int" aria-label="Connected Technology & Integrations">
      <div className="wk-logistics-int__container">
        {/* Header */}
        <div className="wk-logistics-int__header">
          <span className="wk-logistics-int__badge">{badge}</span>
          <h2 className="wk-logistics-int__title">{title}</h2>
          <p className="wk-logistics-int__subtitle">{subtitle}</p>
        </div>

        {/* Central Connected-Node Composition */}
        <div className="wk-logistics-int__ecosystem-layout">
          {/* Radial / Connected Systems Map */}
          <div className="wk-logistics-int__network-board">
            {/* Surrounding Connected Nodes Grid */}
            <div className="wk-logistics-int__nodes-grid">
              {nodes.map((node) => {
                const isActive = activeNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    className={`wk-logistics-int__node-card ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveNodeId(node.id)}
                    aria-label={`Inspect ${node.name} integration details`}
                  >
                    <div className="wk-logistics-int__node-header">
                      <span className="wk-logistics-int__node-connector-line" aria-hidden="true" />
                      <h4 className="wk-logistics-int__node-name">{node.name}</h4>
                    </div>
                    <p className="wk-logistics-int__node-cat">{node.category}</p>

                  </button>
                );
              })}
            </div>
          </div>

          {/* Architecture Companion Visual & Live Telemetry Mockup */}
          <div className="wk-logistics-int__visual-bar">
            <div className="wk-logistics-int__mockup-wrap">
              <img
                src={getImgSrc(LOGISTICS_DEMO_PLACEHOLDER)}
                alt="Central logistics data hub connecting ERP, WMS, and IoT telematics"
                className="wk-logistics-int__mockup-img"
                loading="lazy"
              />
              <div className="wk-logistics-int__mockup-badge">
                <span>Architecture Overview: Bidirectional Telemetry & Manifest Sync</span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};
