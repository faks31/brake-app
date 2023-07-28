import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <h2 className="font-semibold mb-8">Delete Account</h2>
      <p className="mb-4">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using &apos;Content here, content here&apos;, making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for &apos;lorem ipsum&apos; will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).{" "}
      </p>
      <p className="mb-4">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using &apos;Content here, content here&apos;, making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for &apos;lorem ipsum&apos; will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>{" "}
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here&apos;, making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for &apos;lorem ipsum&apos; will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).It is a
        long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using &apos;Content here, content here&apos;, making it look like
        readable English. Many desktop publishing packages and web page editors
        now use Lorem Ipsum as their default model text, and a search for &apos;lorem
        ipsum&apos; will uncover many web sites still in their infancy. Various
        versions have evolved over the years, sometimes by accident, sometimes
        on purpose (injected humour and the like).
      </p>
      <div className="flex items-center gap-3 mt-8">
        <input type="radio" id="delete-account" className="cursor-pointer" />
        <label for="delete-account" className="hover:underline cursor-pointer">
          Are you Sure, You want to delete your Account, This action will be
          delete all activities associated with your account.
        </label>
      </div>
      <div className="flex items-center gap-5 mt-20">
        <button className="btn btn-primary">Confirm</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default page;
