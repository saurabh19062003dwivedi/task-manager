export default function LogoutModal({
  open,
  onCancel,
  onConfirm,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-[#0f172a] to-[#020617]
                      text-white p-6 rounded-xl w-[380px]
                      shadow-2xl border border-white/10">
        
        <h2 className="text-xl font-semibold mb-2">
          Confirm Logout
        </h2>

        <p className="text-sm text-gray-300 mb-6">
          Are you sure you want to logout from your account?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded border border-white/20
                       text-gray-200 hover:bg-white/10 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded
                       hover:bg-red-700 transition"
          >
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
}

