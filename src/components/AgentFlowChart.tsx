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
  const nodeH = 52;

  return (
    <div className={`relative ${className}`}>
      <h3 className="text-lg font-semibold mb-5 text-center text-slate-800">{workflow.title}</h3>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full max-w-[700px] mx-auto"
          style={{ minWidth: '500px' }}
        >
          <defs>
            <filter id="glow-filter">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#94A3B8" />
            </marker>
            <marker id="arrowhead-glow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#6366F1" />
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
                stroke={bothAutomated ? '#6366F1' : '#CBD5E1'}
                strokeWidth={bothAutomated ? 2 : 1.5}
                strokeDasharray={bothAutomated ? '8 4' : 'none'}
                markerEnd={`url(#${bothAutomated ? 'arrowhead-glow' : 'arrowhead'})`}
                className={bothAutomated ? 'glow-line' : ''}
                opacity={bothAutomated ? 0.8 : 0.6}
              />
            );
          })}

          {workflow.nodes.map((node) => (
            <g
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              <rect
                x={node.x}
                y={node.y}
                width={nodeW}
                height={nodeH}
                rx={10}
                fill={node.automated ? '#EEF2FF' : '#F8FAFC'}
                stroke={node.automated ? '#6366F1' : '#E2E8F0'}
                strokeWidth={node.automated ? 2 : 1}
                filter={node.automated ? 'url(#glow-filter)' : undefined}
                className={node.automated ? 'glow-node' : ''}
              />
              <text
                x={node.x + nodeW / 2}
                y={node.y + nodeH / 2 - 4}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={node.automated ? '#4338CA' : '#475569'}
                fontSize={11}
                fontWeight={600}
              >
                {node.label}
              </text>
              {node.automated && (
                <text
                  x={node.x + nodeW / 2}
                  y={node.y + nodeH / 2 + 12}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#6366F1"
                  fontSize={9}
                >
                  AI Automated
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {hoveredNode && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-600 max-w-xs text-center pointer-events-none shadow-medium">
          {workflow.nodes.find((n) => n.id === hoveredNode)?.description}
        </div>
      )}

      <div className="flex items-center justify-center gap-6 mt-5 text-xs text-slate-400">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md border-2 border-brand-500 bg-brand-50 glow-node" />
          AI Automated
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md border border-slate-200 bg-slate-50" />
          Manual Step
        </span>
      </div>
    </div>
  );
}
