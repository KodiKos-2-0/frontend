import { useNavigate } from 'react-router-dom';
import { FileText, File, Grid, Clock, Search, SlidersHorizontal, Plus, MoreVertical, Users, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

interface Document {
  name: string;
  classification: string;
  classificationColor: string;
  keywords: { text: string; color: string }[];
  status: string;
  lastModified: string;
}

const DocumentsPage = () => {
  const navigate = useNavigate();
  const documents: Document[] = [
    {
      name: "Q3 Financial Report 2023",
      classification: "Regular",
      classificationColor: "gray",
      keywords: [
        { text: "finance", color: "gray" },
        { text: "report", color: "gray" }
      ],
      status: "Published",
      lastModified: "2 hours ago"
    },
    {
      name: "Master Service Agreement v2.3",
      classification: "Contract",
      classificationColor: "purple",
      keywords: [
        { text: "legal", color: "gray" },
        { text: "agreement", color: "gray" }
      ],
      status: "Published",
      lastModified: "yesterday"
    },
    {
      name: "Invoice #2025-1015",
      classification: "Invoice",
      classificationColor: "cyan",
      keywords: [
        { text: "billing", color: "gray" },
        { text: "payment", color: "gray" }
      ],
      status: "Draft",
      lastModified: "3 days ago"
    },
    {
      name: "Marketing Campaign Brief: Summer",
      classification: "Regular",
      classificationColor: "gray",
      keywords: [
        { text: "marketing", color: "gray" },
        { text: "campaign", color: "gray" }
      ],
      status: "Published",
      lastModified: "last week"
    },
    {
      name: "NDA with Tech Solutions Inc.",
      classification: "Contract",
      classificationColor: "purple",
      keywords: [
        { text: "nda", color: "gray" },
        { text: "confidentiality", color: "gray" }
      ],
      status: "Archived",
      lastModified: "2 weeks ago"
    }
  ];

  const getClassificationColor = (color: string) => {
    const colors: { [key: string]: string } = {
      gray: "bg-gray-100 text-gray-700",
      purple: "bg-purple-100 text-purple-700",
      cyan: "bg-cyan-100 text-cyan-700"
    };
    return colors[color] || colors.gray;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-[5cm] bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
            <Users className="w-4 h-4" />
            <span>Organizations</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded">
            <FileText className="w-4 h-4" />
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
      <div className="flex-1 overflow-auto flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">DocuGlass AI</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
              <span className="text-sm font-medium text-gray-600">U</span>
            </button>
            <button className="w-9 h-9 rounded flex items-center justify-center hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Document Overview</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-3xl font-bold text-gray-900 mb-1">128</div>
              <div className="text-sm text-gray-600">Total Documents</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-1">
                <File className="w-5 h-5 text-blue-500" />
                <div className="text-3xl font-bold text-gray-900">45</div>
              </div>
              <div className="text-sm text-gray-600">Invoices</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-1">
                <Grid className="w-5 h-5 text-blue-500" />
                <div className="text-3xl font-bold text-gray-300">22</div>
              </div>
              <div className="text-sm text-gray-400">Contracts</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-gray-300" />
                <div className="text-3xl font-bold text-gray-300">18</div>
              </div>
              <div className="text-sm text-gray-400">Drafts</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-5 h-5 text-gray-300" />
                <div className="text-3xl font-bold text-gray-300"></div>
              </div>
              <div className="text-sm text-gray-400"></div>
            </div>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search documents by keywords or content..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
              <SlidersHorizontal className="w-4 h-4" />
              Add Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg text-sm hover:bg-blue-500">
              <Plus className="w-4 h-4" />
              Create New Document
            </button>
          </div>

          {/* Documents Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">All Documents</h2>
            </div>
            
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Document</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Classification</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Keywords</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Last Modified</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {documents.map((doc, index) => (
                  <tr key={index} className="hover:bg-gray-50 cursor-pointer" onClick={() => navigate(`/details/${index}`)}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-blue-600 hover:underline font-medium">{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getClassificationColor(doc.classificationColor)}`}>
                        {doc.classification}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {doc.keywords.map((keyword, kidx) => (
                          <span key={kidx} className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                            {keyword.text}
                          </span>
                        ))}
                        <span className="text-xs text-gray-400">+2 more</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{doc.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {doc.lastModified}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <span className="text-sm text-gray-600">Showing 1 to 5 of documents</span>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-8 py-4 mt-auto bg-white">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>© 2025 DocuGlass AI. All rights reserved</span>
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

export default DocumentsPage;