import { FileText, Users, Settings, ArrowLeft, Eye, Trash2, Save, Upload } from 'lucide-react';

const DocumentDetailsPage = () => {
  const keywords = [
    'quarterly', 'finance', 'report', '2024',
    'performance', 'revenue', 'expenses',
    'budget', 'analysis', 'growth'
  ];

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
            <button className="w-9 h-9 rounded flex items-center justify-center hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button className="w-9 h-9 rounded flex items-center justify-center hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4" />
                Back to Documents
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Document Details</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                <Eye className="w-4 h-4" />
                Preview
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 rounded-lg text-sm hover:bg-red-600">
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-400 rounded-lg text-sm hover:bg-blue-500">
                <Save className="w-4 h-4" />
                Save Document
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-8 py-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column - Document Content */}
            <div className="col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Document Content</h2>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <h3 className="font-semibold mb-2">### Executive Summary</h3>
                      <p className="leading-relaxed">
                        The first quarter of 2024 saw significant growth in key revenue streams, driven by strong market 
                        demand and strategic product launches. Despite rising operational costs, we have multiple 
                        sustained positive cash flow. Our investments in R&D and marketing initiatives have begun to show 
                        promising returns, positioning the company for continued expansion and optimized resource allocation. 
                        We are on track to meet our annual financial targets.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">## Financial Highlights</h3>
                      <p className="leading-relaxed mb-2">
                        <strong>* Total Revenue (Q1):</strong> Total revenue for Q1 2024 reached $15.2 million, representing 
                        a 15% increase year-over-year. This growth was primarily attributed to:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>New product sales, which increased by 18% due to successful marketing campaigns and expanded 
                        distribution channels.</li>
                        <li>Subscription-based services, which grew by 12% as we secured additional long-term contracts.</li>
                        <li>International sales, contributing 30% to our overall customer base.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">** Customer Acquisition:** Grew by 10% as our customer base 
                      expanded and retention rates improved.</h3>
                    </div>
                  </div>
                </div>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">
                    Drag and drop document here, <button className="text-blue-500 hover:underline">or click to upload</button>
                  </p>
                  <p className="text-xs text-gray-500">Supported formats: PDF, DOCX, TXT</p>
                </div>
              </div>
            </div>

            {/* Right Column - Metadata */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Document Metadata & AI Insights</h2>
                
                <div className="space-y-4">
                  {/* Document Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Document Name</label>
                    <input
                      type="text"
                      value="Quarterly Financial Report Q1 2024"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      readOnly
                    />
                  </div>

                  {/* Classification */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Classification <span className="text-gray-500">(AI-Generated)</span>
                    </label>
                    <span className="inline-flex px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg font-medium">
                      Financial Report
                    </span>
                  </div>

                  {/* Keywords */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">AI-Extracted Keywords</label>
                    <div className="flex flex-wrap gap-2">
                      {keywords.map((keyword, index) => (
                        <span key={index} className="inline-flex px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Upload Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Date</label>
                    <input
                      type="text"
                      value="2024-04-23"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-8 py-4 bg-white mt-auto">
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

export default DocumentDetailsPage