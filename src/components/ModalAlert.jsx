import React from 'react'

const ModalAlert = () => {
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg p-6 max-w-md w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Вы действительно хотите удалить выбранную историю?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Все данные, включая вопрос и ответ, будут безвозвратно удалены
                    </p>
                    <div className="flex justify-end space-x-3">
                        <button
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAlert