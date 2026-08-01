import React from "react";

const AccountDeletion = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12">
      <h2 className="text-2xl font-bold mb-4">Account Deletion Request</h2>

      <p className="mb-4">
        This page applies to the <strong>Conserve Marine Biodiversity</strong>{" "}
        mobile application. Users can request deletion of their account and
        associated personal data at any time.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        How to request account deletion
      </h3>

      <p className="mb-4">
        To request account deletion, please send an email from your{" "}
        <strong>registered email address</strong> to:
      </p>

      <div className="bg-gray-600 p-4 rounded-md mb-4">
        <p className="mb-1">
          <strong>Email:</strong> worldmarinebiodiversity@gmail.com
        </p>
        <p>
          <strong>Subject:</strong> Account Deletion Request
        </p>
      </div>

      <p className="mb-6 italic text-sm text-gray-600">
        This request can be made{" "}
        <strong>even if you are unable to log in to the app</strong>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Data that will be deleted
      </h3>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>User account (authentication credentials)</li>
        <li>Email address and profile information</li>
        <li>Any personal data associated with the account</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Deletion timeline</h3>
      <p className="mb-6">
        All requested data will be permanently deleted within
        <strong> 7 working days</strong> after verification of the request.
      </p>

      <p className="mt-8 border-t pt-4 text-gray-700">
        If you have any questions regarding data deletion, contact us at
        <strong> worldmarinebiodiversity@gmail.com</strong>.
      </p>
    </div>
  );
};

export default AccountDeletion;
