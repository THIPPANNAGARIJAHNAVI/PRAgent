import React,{useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
const GetRepoDetails=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm();
    const [feedback,setFeedback]=useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handlesubmit=async(data)=>{
        setLoading(true);
        setError(null);
        setFeedback(null);
        try{
            const res=await axios.post('http://localhost:8000/review_pr',{repo_owner:data.repository_owner,repo_name:data.repository_name});
            console.log(res.data);
            setFeedback(res.data);
        }
        catch(err){
            setError(err.response?.data?.error || err.message || 'An error occurred while getting feedback.');
            console.error('Error:',err.response?.data?.error || err.message || 'An error occurred while getting feedback.');
        } finally {
            setLoading(false);
        }
    }
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-blue-900 leading-normal mb-3 inline-block">
                        PR Review Agent
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                        Enter repository details to get comprehensive PR reviews and feedback
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8 transition-all duration-300 hover:shadow-2xl">
                    <form onSubmit={handleSubmit(handlesubmit)}>
                        <div className="space-y-6">
                            {/* Repository Owner Input */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Repository Owner
                                </label>
                                <input 
                                    type="text" 
                                    {...register('repository_owner',{required:'Repository owner is required'})}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                                               focus:outline-none focus:ring-2 focus:ring-blue-900 
                                               focus:border-transparent transition-all duration-200
                                               text-gray-900 placeholder-gray-400
                                               disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="e.g., microsoft, facebook, google"
                                    disabled={loading}
                                />
                                {errors.repository_owner && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        {errors.repository_owner.message}
                                    </p>
                                )}
                            </div>

                            {/* Repository Name Input */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Repository Name
                                </label>
                                <input 
                                    type="text" 
                                    {...register('repository_name',{required:'Repository name is required'})}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                                               focus:outline-none focus:ring-2 focus:ring-blue-900 
                                               focus:border-transparent transition-all duration-200
                                               text-gray-900 placeholder-gray-400
                                               disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="e.g., react, vscode, tensorflow"
                                    disabled={loading}
                                />
                                {errors.repository_name && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        {errors.repository_name.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-900 to-indigo-900 
                                           hover:from-blue-800 hover:to-indigo-800 
                                           disabled:from-gray-400 disabled:to-gray-500
                                           text-white font-semibold py-3.5 px-6 
                                           rounded-lg transition-all duration-200 
                                           transform hover:scale-[1.02] active:scale-[0.98]
                                           disabled:cursor-not-allowed disabled:transform-none
                                           shadow-lg hover:shadow-xl
                                           flex items-center justify-center space-x-2"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Fetching Reviews...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Get Feedback</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Error Display */}
                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8 shadow-md animate-fade-in">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-lg font-semibold text-red-800 mb-1">Error</h3>
                                <p className="text-red-700">{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Feedback Display */}
                {feedback && (
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 animate-fade-in">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">PR Review Results</h2>
                                {feedback.reviews && (
                                    <p className="text-sm text-gray-500 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        {feedback.reviews.length} file{feedback.reviews.length !== 1 ? 's' : ''} reviewed
                                    </p>
                                )}
                            </div>
                            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                                Review Complete
                            </div>
                        </div>

                        {/* Reviews List */}
                        {feedback.reviews && feedback.reviews.map((review,index)=>(
                            <div key={index} className="mb-8 last:mb-0 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
                                <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-300">
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        {review.filename}
                                    </h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        review.status === 'added' ? 'bg-green-100 text-green-800' :
                                        review.status === 'modified' ? 'bg-blue-100 text-blue-800' :
                                        review.status === 'removed' ? 'bg-red-100 text-red-800' :
                                        'bg-gray-100 text-gray-800'
                                    }`}>
                                        {review.status}
                                    </span>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                                        <p className="text-sm text-gray-500 mb-1">Additions</p>
                                        <p className="text-2xl font-bold text-green-600">{review.additions}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                                        <p className="text-sm text-gray-500 mb-1">Deletions</p>
                                        <p className="text-2xl font-bold text-red-600">{review.deletions}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                                        <p className="text-sm text-gray-500 mb-1">Total Changes</p>
                                        <p className="text-2xl font-bold text-blue-600">{review.changes}</p>
                                    </div>
                                </div>

                                {review.patch && (
                                    <div className="mb-4">
                                        <p className="text-sm font-semibold text-gray-700 mb-2">Patch</p>
                                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs font-mono border border-gray-700">
                                            {review.patch}
                                        </pre>
                                    </div>
                                )}

                                {review.feedback && (
                                    <div className="mt-6 pt-6 border-t border-gray-300">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Code Review Feedback
                                        </h4>

                                        {/* Error Display */}
                                        {review.feedback.error && review.feedback.error.trim() !== '' && (
                                            <div className="mb-4 bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                                                <div className="flex items-start">
                                                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p className="text-sm text-red-700 font-medium">{review.feedback.error}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Positive Aspects */}
                                        {review.feedback.Positive_Aspects && review.feedback.Positive_Aspects.length > 0 && (
                                            <div className="mb-6 bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                                                <h5 className="text-sm font-bold text-green-800 mb-3 flex items-center">
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    Positive Aspects
                                                </h5>
                                                <ul className="space-y-2">
                                                    {review.feedback.Positive_Aspects.map((aspect, idx) => (
                                                        <li key={idx} className="text-sm text-green-700 flex items-start">
                                                            <span className="text-green-500 mr-2 mt-1">•</span>
                                                            <span>{aspect}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Areas for Improvement */}
                                        {review.feedback.Areas_for_Improvement && review.feedback.Areas_for_Improvement.length > 0 && (
                                            <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
                                                <h5 className="text-sm font-bold text-yellow-800 mb-3 flex items-center">
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    Areas for Improvement
                                                </h5>
                                                <ul className="space-y-2">
                                                    {review.feedback.Areas_for_Improvement.map((area, idx) => (
                                                        <li key={idx} className="text-sm text-yellow-700 flex items-start">
                                                            <span className="text-yellow-500 mr-2 mt-1">•</span>
                                                            <span>{area}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Line Level Feedback */}
                                        {review.feedback.Line_Level_Feedback && review.feedback.Line_Level_Feedback.length > 0 && (
                                            <div className="mb-6 bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4">
                                                <h5 className="text-sm font-bold text-orange-800 mb-3 flex items-center">
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                    </svg>
                                                    Line-Level Feedback
                                                </h5>
                                                <div className="space-y-4">
                                                    {review.feedback.Line_Level_Feedback.map((lineFeedback, idx) => (
                                                        <div key={idx} className="bg-white rounded-lg p-4 border border-orange-200">
                                                            <div className="flex items-center mb-2">
                                                                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                                                                    Line {lineFeedback.line}
                                                                </span>
                                                                <span className="text-sm font-semibold text-orange-900">{lineFeedback.issue}</span>
                                                            </div>
                                                            <div className="mb-2">
                                                                <p className="text-xs font-medium text-gray-600 mb-1">Explanation:</p>
                                                                <p className="text-sm text-gray-700">{lineFeedback.explanation}</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium text-gray-600 mb-1">Suggested Fix:</p>
                                                                <p className="text-sm text-gray-700 italic">{lineFeedback.suggested_fix}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Corrected Code */}
                                        {review.feedback.Corrected_Code && review.feedback.Corrected_Code.trim() !== '' && (
                                            <div className="mb-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
                                                <h5 className="text-sm font-bold text-blue-800 mb-3 flex items-center">
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                    Corrected Code
                                                </h5>
                                                <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                                                    <pre className="text-xs font-mono text-gray-100 p-4 overflow-auto max-h-96" style={{scrollbarWidth: 'thin', scrollbarColor: '#4B5563 #1F2937'}}>
                                                        <code>{review.feedback.Corrected_Code}</code>
                                                    </pre>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default GetRepoDetails;
