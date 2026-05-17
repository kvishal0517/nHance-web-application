import { useState } from 'react';
import type { AgentWorkflow } from '../types';

interface AgentFlowChartProps {
  workflow: AgentWorkflow;
  className?: string;
}

export function AgentFlowChart({ workflow, className = '' }: AgentFlowChartProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const width = 700;
  const height = 320;
  const nodeW = 140;
  const nodeH = 48;

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full max-w-[700px] mx-auto"
          style={{ minWidth: '500px' }}
        >
          <defs>
            <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0071e3" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0071e3" stopOpacity="0.05" />
            </linearGradient>
            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#d2d2d7" />
            </marker>
            <marker id="arrowhead-active" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#0071e3" />
            </marker>
          </defs>

          {workflow.edges.map((edge) => {
            const fromNode = workflow.nodes.find((n) => n.id === edge.from);
            const toNode = workflow.nodes.find((n) => n.id === edge.to);
            if (!fromNode || !toNode) return null;

            const x1 = fromNode.x + nodeW;
            const y1 = fromNode.y + nodeH / 2;
            const x2 = toNode.x;
            const y2 = toNode.y + nodeH / 2;

            const bothAutomated = fromNode.automated && toNode.automated;

            return (
              <line
                key={`${edge.from}-${edge.to}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={bothAutomated ? '#0071e3' : '#e8e8ed'}
                strokeWidth={1}
                markerEnd={`url(#${bothAutomated ? 'arrowhead-active' : 'arrowhead'})`}
                className={bothAutomated ? 'animate-pulse' : ''}
                opacity={bothAutomated ? 1 : 0.5}
              />
            );
          })}

          {workflow.nodes.map((node) => (
            <g
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer transition-transform duration-300"
              style={{ transform: hoveredNode === node.id ? 'translateY(-2px)' : 'none' }}
            >
              <rect
                x={node.x}
                y={node.y}
                width={nodeW}
                height={nodeH}
                rx={12}
                fill={node.automated ? 'white' : '#f5f5f7'}
                stroke={node.automated ? '#0071e3' : '#e8e8ed'}
                strokeWidth={node.automated ? 1.5 : 1}
                className="transition-all duration-300"
                style={{ 
                  boxShadow: node.automated ? '0 4px 12px rgba(0, 113, 227, 0.1)' : 'none'
                }}
              />
              <text
                x={node.x + nodeW / 2}
                y={node.y + nodeH / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={node.automated ? '#1d1d1f' : '#86868b'}
                fontSize={10}
                fontWeight={node.automated ? 700 : 500}
                letterSpacing="-0.01em"
              >
                {node.label}
              </text>
              {node.automated && (
                <circle
                  cx={node.x + nodeW - 12}
                  cy={node.y + 12}
                  r="3"
                  fill="#0071e3"
                  className="animate-pulse"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      <div className="flex items-center justify-center gap-8 mt-8">
        <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-apple-black">
          <span className="w-2 h-2 rounded-full bg-apple-blue shadow-[0_0_8px_rgba(0,113,227,0.5)] animate-pulse" />
          AI Core
        </span>
        <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-apple-darkGray">
          <span className="w-2 h-2 rounded-full bg-apple-gray border border-slate-200" />
          Data Input
        </span>
      </div>
    </div>
  );
}
