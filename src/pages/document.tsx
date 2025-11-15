import { api } from "@/api";
import { BACKEND } from "@/constants/backend";
import type { Document, Nullable } from "@/lib/types";
import { ArrowLeft, Eye, Save, Trash2, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Page() {
  const { id } = useParams();

  const [document, setDocument] = useState<Nullable<Document>>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.documents
      .fetchOne(Number(id as string))
      .then((doc) => doc && setDocument(doc))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  const keywords =
    document?.custom_fields
      .filter(
        (cfield) =>
          cfield.field === BACKEND.document.custom_fields.keywords_field_id
      )
      ?.map((cfield) => cfield.value)[0]
      ?.split(",") || [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="flex-1 overflow-auto flex flex-col">
      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4" />
              Back to Documents
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-2xl font-bold text-gray-900">
              Document Details
            </h1>
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

      <div className="flex-1 px-8 py-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Document Content */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Document Content
              </h2>

              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                {document?.mime_type === "text/plain" && (
                  <p>{document.content}</p>
                )}
                {document?.mime_type.startsWith("image/") && (
                  <img
                    src={`${BACKEND.baseURL}/${document.storage_path!}`}
                    alt={`${BACKEND.baseURL}/${document.storage_path!}`}
                    className="max-w-full"
                  />
                )}
              </div>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-1">
                  Drag and drop document here,{" "}
                  <button className="text-blue-500 hover:underline">
                    or click to upload
                  </button>
                </p>
                <p className="text-xs text-gray-500">
                  Supported formats: PDF, DOCX, TXT
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Metadata */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Document Metadata & AI Insights
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Document Name
                  </label>
                  <input
                    type="text"
                    value={document?.original_file_name}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    readOnly
                  />
                </div>

                {/* Classification */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Classification{" "}
                    <span className="text-gray-500">(AI-Generated)</span>
                  </label>
                  <span className="inline-flex px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg font-medium">
                    Financial Report
                  </span>
                </div>

                {/* Keywords */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    AI-Extracted Keywords
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword, kindex) => (
                      <span
                        key={kindex}
                        className="inline-flex px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Upload Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Date
                  </label>
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
    </main>
  );
}
