import { Users, ExternalLink, Trash2, Settings } from 'lucide-react';

interface Organization {
  name: string;
  description: string;
  memberCount: number;
}

const OrganizationsPage = () => {
  const organizations: Organization[] = [
    {
      name: "Innovate Solutions Inc.",
      description: "Leading the future of AI-driven document management with cutting-edge technology and robust security.",
      memberCount: 12
    },
    {
      name: "Global Data Hub",
      description: "Secure and efficient data processing for large enterprises, ensuring compliance and scalability.",
      memberCount: 8
    },
    {
      name: "Quantum Analytics Co.",
      description: "Advanced analytics for strategic business insights, transforming raw data into actionable intelligence.",
      memberCount: 25
    },
    {
      name: "Eco-Tech Innovations",
      description: "Sustainable solutions through intelligent document processing and environmental responsibility.",
      memberCount: 5
    },
    {
      name: "Fusion Systems Group",
      description: "Integrating diverse data sources for unified insights, enabling streamlined operational workflows.",
      memberCount: 18
    },
    {
      name: "Pioneer Research Labs",
      description: "Frontier research in AI and machine learning for document analysis, pushing the boundaries of discovery.",
      memberCount: 7
    },
    {
      name: "Digital Transformation Corp.",
      description: "Empowering businesses with seamless digital transitions and innovative technological adoption.",
      memberCount: 20
    },
    {
      name: "Cloud Native Solutions",
      description: "Building scalable and resilient cloud infrastructure for the modern enterprise.",
      memberCount: 15
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-[5cm] bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded">
            <Users className="w-4 h-4" />
            <span>Organizations</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Documents</span>
          </div>
        </div>
        
        <div className="mt-auto p-4">
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xl font-semibold">DocuGlass AI</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">U</span>
            </button>
            <button className="w-9 h-9 rounded flex items-center justify-center hover:bg-gray-100">
              <ExternalLink className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="px-8 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Organizations</h1>
            <p className="text-gray-600 mb-4">
              Manage your organizational units, members, and access permissions. Create new organizations or browse existing ones.
            </p>
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-medium">
              <span className="text-lg">+</span>
              Create New Organization
            </button>
          </div>

          {/* Organizations Grid */}
          <div className="grid grid-cols-3 gap-6">
            {organizations.map((org, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{org.name}</h3>
                <p className="text-sm text-gray-600 mb-4 min-h-[60px]">{org.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  <span>{org.memberCount} Members</span>
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex-1 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium">
                    View Members
                  </button>
                  <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
                    <ExternalLink className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
                    <Trash2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-8 py-4 mt-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>© 2025 DocuGlass AI. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsPage;