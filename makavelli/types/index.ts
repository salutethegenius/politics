export type NodeTypeSlug =
  | "Person"
  | "Organization"
  | "Ministry"
  | "Agency"
  | "Department"
  | "Project"
  | "Meeting"
  | "Opportunity"
  | "Research"
  | "Product"
  | "Proposal"
  | "Document"
  | "Idea"
  | "Task"
  | "Goal"
  | "Technology"
  | "Location"
  | "Pilot"
  | "CaseStudy"
  | "Dashboard";

export type RelationshipType =
  | "RELATED_TO"
  | "WORKS_FOR"
  | "PART_OF"
  | "ADVISES"
  | "SUPPORTS"
  | "OWNS"
  | "MANAGES"
  | "MET_WITH"
  | "CREATED"
  | "FOLLOWS"
  | "DEPENDS_ON"
  | "LEADS_TO"
  | "PILOTS"
  | "PRODUCED"
  | "HAS_TASK"
  | "HAS_DOCUMENT"
  | "HAS_MEETING"
  | "HAS_RESEARCH"
  | "HAS_OPPORTUNITY"
  | "INTRODUCED_BY"
  | "COMPETES_WITH";

export interface NodeTypeConfig {
  slug: NodeTypeSlug;
  name: string;
  icon: string;
  color: string;
}

export interface GraphNode {
  id: string;
  label: string;
  type: NodeTypeSlug;
  color: string;
  properties: Record<string, unknown>;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: RelationshipType;
  properties: Record<string, unknown>;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface DashboardWidget {
  id: string;
  title: string;
  href?: string;
  children?: React.ReactNode;
}

export interface AIAssistantMessage {
  role: "user" | "assistant";
  content: string;
  citations?: { id: string; name: string; type: NodeTypeSlug }[];
}
