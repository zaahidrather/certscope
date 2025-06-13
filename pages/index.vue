<template>
  <!-- Hero Section -->
  <section
    class="my-15 flex flex-col items-center justify-center font-extrabold lg:h-[350px] lg:flex-row"
  >
    <div class="md:pl-50 lg:w-1/2">
      <h1 class="text-title mb-5 text-3xl md:text-4xl lg:text-5xl">
        Pursue your <br />
        <span class="text-primary text-[130%]">PASSION</span>
      </h1>
      <h3 class="text-neutral mb-20 text-2xl font-bold md:text-3xl">
        Choose, Learn, and Achieve.
      </h3>
    </div>

    <div class="w-4/5 flex-col items-center md:flex lg:w-1/2">
      <div class="mb-8 inline-block w-8/10">
        <Typewriter />
      </div>

      <div
        class="bg-background-light w-8/10 rounded border border-[#373d4f] px-4 py-6 lg:mb-20"
      >
        <input
          id="search-bar"
          class="text-neutral bg-background-light placeholder:text-neutral w-8/10 border border-[#373d4f] py-3 pl-4 font-normal placeholder:text-base placeholder:font-light"
          type="search"
          placeholder="What do you want to pursue?"
        />
      </div>
    </div>
  </section>

  <Divider />

  <!-- Achieve with Certscope -->
  <section class="py-15 text-center">
    <h1 class="px-5 py-8 text-5xl font-bold text-white">
      Achieve with <span class="text-primary">Certscope</span>
    </h1>
    <div
      class="grid grid-cols-2 gap-8 px-5 py-12 md:mx-[15%] md:grid-cols-3 lg:grid-cols-4"
    >
      <!-- Card 1 -->
      <div class="flex flex-col items-center text-center">
        <svg
          class="objective-icon fill-current text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 64 64"
        >
          <defs></defs>
          <path
            d="M63 19V5c0-1.103-.897-2-2-2H51c-1.103 0-2 .897-2 2v3.22A20.864 20.864 0 0042 7c-1.036 0-2.071.098-3.094.248C37.128 3.559 33.362 1 29 1a10.986 10.986 0 00-8.479 4H3c-1.103 0-2 .897-2 2v3a6.996 6.996 0 003.24 5.895L1.082 27.546A2.787 2.787 0 003 30.889V33c0 4.411 3.589 8 8 8h5v3.477a14.444 14.444 0 00-6 11.734V63h24V49c0-.594-.09-1.168-.252-1.71a20.978 20.978 0 006.166 1.598l2.702 4.715 2.399-1.411V55h5.967l-.019-2.811 2.418 1.413 2.979-5.198L53.944 47l2.418-1.404-.867-1.513C60.273 40.077 63 34.268 63 28c0-2.465-.444-4.856-1.273-7.142A2 2 0 0063 19zM51 5h10l.002 14H51zM29 3c4.963 0 9 4.037 9 9 0 3.211-1.62 5.183-3.187 7.09-.98 1.193-1.986 2.424-2.543 3.91H32v-8h1c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3v1h-2v-1c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3h1v8h-.27c-.557-1.487-1.563-2.717-2.543-3.91C21.62 17.183 20 15.211 20 12c0-4.963 4.037-9 9-9zm0 28a2.996 2.996 0 01-2.816-2h5.631A2.994 2.994 0 0129 31zm-3-18h-1a1 1 0 111-1zm4 10h-2v-8h2zm2 2v2h-6v-2zm0-12v-1a1 1 0 111 1zM3 10V7h16.214A10.928 10.928 0 0018 12c0 3.928 1.935 6.282 3.641 8.359 1.071 1.304 1.992 2.437 2.359 3.8V28a5.01 5.01 0 004 4.899v4.921l-2.944-.491a8.415 8.415 0 01-7.021-7.557l.656-.165A4.36 4.36 0 0022 25.369a4.375 4.375 0 00-4-4.354V21c0-3.309-2.691-6-6-6H8c-2.757 0-5-2.243-5-5zm19 39v12H12v-4.789c0-4.18 2.076-8.06 5.555-10.379l.445-.297V41h2v-2h-9c-3.309 0-6-2.691-6-6v-4H3.781a.783.783 0 01-.763-.951l3.069-11.321A6.979 6.979 0 008 17h4c2.206 0 4 1.794 4 4v2h1.631A2.371 2.371 0 0120 25.369a2.367 2.367 0 01-1.795 2.299L16 28.22V29a10.41 10.41 0 008.728 10.302l3.272.545V43c-3.309 0-6 2.691-6 6zm10 12h-8V49c0-2.206 1.794-4 4-4s4 1.794 4 4zm20.923-12.28l.715.415-.987 1.724-.678-.396a1.996 1.996 0 00-2.989 1.73V53h-1.967v-.809c0-.705-.378-1.364-.995-1.725s-1.381-.363-1.996-.004l-.676.396-.987-1.724.715-.415a1.989 1.989 0 00.982-1.724 1.987 1.987 0 00-.983-1.717l-.714-.414.987-1.724.678.396a1.98 1.98 0 001.896.048l.107-.059a1.996 1.996 0 00.986-1.719V41h1.967v.809c0 .705.378 1.364 1.013 1.734l.012.006.053.029.024.012a1.97 1.97 0 001.89-.053l.676-.396.987 1.724-.715.415a1.989 1.989 0 00-.982 1.724 1.978 1.978 0 00.981 1.716zm1.562-6.399l-1.103-1.924-2.393 1.409L50.983 39h-5.967l.024 2.789.008.014-.014.008-2.418-1.413-2.979 5.198 2.435 1.395-.016.009H42a18.989 18.989 0 01-12-4.287v-9.814A5.009 5.009 0 0034 28v-3.841c.367-1.363 1.288-2.496 2.359-3.8C38.065 18.282 40 15.928 40 12c0-.984-.142-1.934-.386-2.843A19.125 19.125 0 0149 10.345V19c0 1.103.897 2 2 2h8.646A18.862 18.862 0 0161 28c0 5.55-2.361 10.706-6.515 14.321z"
          />
          <path
            d="M53 7h6v2h-6zM53 11h6v2h-6zM53 15h6v2h-6zM48 44c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1 1 0 110-2 1 1 0 010 2zM39 25c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1 1 0 110-2 1 1 0 010 2zM47 25c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1 1 0 110-2 1 1 0 010 2zM55 25c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>

        <h4 class="text-navy mt-3 mb-1 font-semibold">Learn latest skills</h4>
        <p class="text-neutral text-xs">
          Learn new skills like Project management, AWS, Security or anything
          that matters to you in your industry. New skills translate to new
          opportunities.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="flex flex-col items-center text-center">
        <svg
          class="objective-icon fill-current text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 64 64"
        >
          <defs></defs>
          <path
            d="M3 14a1 1 0 001-1V7a3 3 0 013-3h20a3 3 0 013 3v12a1 1 0 002 0V7a5.006 5.006 0 00-5-5H7a5.006 5.006 0 00-5 5v6a1 1 0 001 1zM3 44h1.886a50.937 50.937 0 0016.8-2.858 1 1 0 00-.658-1.889A48.921 48.921 0 014.886 42H3a1 1 0 000 2z"
          ></path>
          <path
            d="M41.186 42.354A52.2 52.2 0 0058.5 16.018l2.105.9a1 1 0 001.359-1.182l-3-11a1 1 0 00-1.379-.647l-11 5a1 1 0 00.02 1.829l3.378 1.448a48.964 48.964 0 01-7.744 12.4 1 1 0 101.52 1.3 50.9 50.9 0 008.456-13.847 1 1 0 00-.531-1.3l-2.209-.947L57.344 6.4l2.146 7.869-1.261-.54a1 1 0 00-1.363.671A50.173 50.173 0 0138.385 42h-1.111A7.976 7.976 0 0040 36a1 1 0 00-2 0 6 6 0 01-12 0v-3.955a7.685 7.685 0 003.873-1.585A7.72 7.72 0 0035.6 33H39a1 1 0 001-1v-3a7.008 7.008 0 00-7-7H23a1 1 0 00-1 1v1h-3a1 1 0 00-1 1v3.3l-3.384-3.95a1 1 0 00-.759-.35H7a3 3 0 01-3-3v-4a1 1 0 00-2 0v4a5.006 5.006 0 005 5h6.4l4.844 5.65A1 1 0 0019 32a1.021 1.021 0 00.347-.062A1 1 0 0020 31v-5h2v3a5 5 0 002 3.975V36a7.984 7.984 0 003 6.235V43.9l-.98 4.9a1 1 0 001.18 1.18l4.8-.96.183.036.779 8.568-.962.962-.962-.962.5-5.533a1 1 0 00-1.993-.182l-.545 6a1 1 0 00.289.8l2 2a1 1 0 001.414 0l2-2a1 1 0 00.289-.8l-.767-8.444 2.575.515a1 1 0 001.18-1.18l-.96-4.8H39a5.006 5.006 0 015 5v12a1 1 0 002 0V49a7.01 7.01 0 00-4.814-6.646zM24 24h9a5.006 5.006 0 015 5v2h-2.4a5.724 5.724 0 01-4.773-2.555 1 1 0 00-.733-.44 1.023 1.023 0 00-.806.288l-.123.123a5.721 5.721 0 01-3.859 1.677l-.348.012a.99.99 0 00-.616.258A2.931 2.931 0 0124 29zm11 19.411v.175l-3 3-3-3v-.175a7.935 7.935 0 006 0zm-6.725 4.315l.339-1.7 1.358 1.358zm5.753-.34l1.358-1.358.339 1.7z"
          ></path>
          <path
            d="M24.986 42.924a1 1 0 00-1.152-.82A6.974 6.974 0 0018 49v2.058A50.172 50.172 0 018.4 52H3a1 1 0 000 2h5.4a52.278 52.278 0 009.6-.908V61a1 1 0 002 0V49a4.98 4.98 0 014.166-4.924 1 1 0 00.82-1.152zM39 51a1 1 0 00-1 1v9a1 1 0 002 0v-9a1 1 0 00-1-1zM25 51a1 1 0 00-1 1v9a1 1 0 002 0v-9a1 1 0 00-1-1z"
          ></path>
          <circle cx="35" cy="35" r="1"></circle>
          <circle cx="29" cy="35" r="1"></circle>
          <path
            d="M22 12a5 5 0 10-8 3.979V16a1 1 0 000 2v1a3 3 0 006 0v-1a1 1 0 000-2v-.021A5.005 5.005 0 0022 12zm-4 7a1 1 0 01-2 0v-1h2zm.5-4.419a1 1 0 00-.5.864V16h-2v-.555a1 1 0 00-.5-.864A2.968 2.968 0 0114 12a3 3 0 016 0 2.968 2.968 0 01-1.5 2.581zM24 10a1 1 0 00.707-.293l1-1a1 1 0 10-1.414-1.414l-1 1A1 1 0 0024 10zM28 12a1 1 0 00-1-1h-2a1 1 0 000 2h2a1 1 0 001-1zM23.293 15.707l1 1a1 1 0 001.414-1.414l-1-1a1 1 0 00-1.414 1.414zM10.707 8.293l-1-1a1 1 0 10-1.414 1.414l1 1a1 1 0 001.414-1.414zM10 12a1 1 0 00-1-1H7a1 1 0 000 2h2a1 1 0 001-1zM9 17a1 1 0 00.707-.293l1-1a1 1 0 00-1.414-1.414l-1 1A1 1 0 009 17zM53 46a1 1 0 000 2h2a1 1 0 000-2z"
          ></path>
          <path
            d="M61 42H47a1 1 0 000 2h1v3a6 6 0 003 5.188V56a3 3 0 00-3 3v2a1 1 0 001 1h10a1 1 0 001-1v-2a3 3 0 00-3-3v-3.812A6 6 0 0060 47a1 1 0 00-2 0 4 4 0 01-8 0v-3h11a1 1 0 000-2zm-3 17v1h-8v-1a1 1 0 011-1h6a1 1 0 011 1zm-3-6.09V56h-2v-3.09a5.6 5.6 0 002 0z"
          ></path>
        </svg>
        <h4 class="text-navy mt-3 mb-1 font-semibold">Upgrade your skills</h4>
        <p class="text-neutral text-xs">
          Upskill your current skillsets to the latest trends, developments or
          new versions. Stay at fore-front, current and relevant in the ever
          changing world of skills.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="flex flex-col items-center text-center">
        <svg
          class="objective-icon fill-current text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="-26 0 512 512.001"
        >
          <defs></defs>
          <path
            d="M457.086 68.828l-21.879-19.266 21.879-19.261c3.402-3 4.566-7.676 2.969-11.918-1.606-4.246-5.57-6.988-10.106-6.988H359.41V7.504a7.504 7.504 0 10-15.008 0v101.203l-61.629 33.465a23.741 23.741 0 00-2.437-7.883l-8.684-16.953c-5.96-11.64-20.28-16.254-31.914-10.297l-6.715 3.438c-5.64 2.89-9.816 7.796-11.761 13.828a23.54 23.54 0 001.465 18.09l8.683 16.957a23.567 23.567 0 008.547 9.285c-4.61 6.207-6.797 13.84-9.047 21.77l-1.617 5.726a7.5 7.5 0 005.18 9.262c.68.195 1.367.285 2.043.285a7.509 7.509 0 007.218-5.465l1.618-5.715c3.289-11.598 5.308-17.809 11.738-21.3l11.527-6.262 1.422-.727c.473-.242.914-.516 1.363-.785l82.157-44.613c-.52 10.269-6.047 19.972-15.149 25.5l-53.426 32.46c-.062.036-.125.07-.183.11l-16.63 10.101a7.51 7.51 0 00-2.515 10.313c2.028 3.34 6.246 4.527 9.688 2.851l-12.617 38.141-9.223 3.781-25.078 10.278 7.226-25.547a7.51 7.51 0 00-5.18-9.266c-3.992-1.133-8.136 1.192-9.265 5.18l-11.418 40.379a7.204 7.204 0 00-.27 1.633l-2.988 54.89c-.09 2.094.356 6.051-.613 8.094l-33.188 69.82h-24.117c-14.129 0-25.62 11.492-25.62 25.617v21.66a25.417 25.417 0 00-10.61-2.308H51.137c-14.125 0-25.617 11.488-25.617 25.617v26.875H7.504a7.504 7.504 0 100 15.008H449.94a7.504 7.504 0 100-15.008h-19.515V303.574c0-14.125-11.492-25.617-25.617-25.617H359.41v-130.91c8.32-11.277 11.403-26.059 7.54-40.106a7.49 7.49 0 00-4.298-4.914 7.517 7.517 0 00-3.242-.593v-13.7h90.535c4.54 0 8.504-2.742 10.106-6.984 1.601-4.242.437-8.922-2.965-11.922zm-221.54 60.086a8.645 8.645 0 014.317-5.078l6.715-3.438a8.645 8.645 0 013.953-.957c3.164 0 6.223 1.73 7.762 4.735l8.687 16.957c2.028 3.96.715 8.762-2.89 11.187l-2.445 1.325-5.16 2.644c-4.27 2.188-9.528.492-11.715-3.781l-8.688-16.953a8.65 8.65 0 01-.535-6.64zM220.47 401.84a25.471 25.471 0 00-8.239-2.195l8.239-10.942zm35.629-60.465c3.609-4.324 4.605-9.375 5.41-13.445.203-.97 3.906-21.196 3.906-21.196s3.504 2.184 3.871 2.34a.797.797 0 01.461.656l4.082 41.497H248.68zm44.375-41.418l-6.336 51.234h-5.23l-4.223-42.93a15.81 15.81 0 00-8.84-12.687l-7.547-4.785 5.027-27.863s21.18 25.16 21.672 25.8c4.383 5.7 5.883 7.981 5.477 11.231zm-81.055 36.316c1.516-4.562 2.219-9.207 2.102-13.93l2.726-50.062 34.707-14.222-6.308 34.945c-.02.094-.04.191-.051.285l-5.219 28.895c-.68 2.992-1.273 7.53-3.14 9.996l-50.708 67.351h-4.18zm-178.89 133.84c0-5.847 4.757-10.605 10.609-10.605h61.246c5.851 0 10.613 4.758 10.613 10.605v26.88H40.527zm97.472 0v-44.965c0-5.851 4.762-10.609 10.613-10.609h61.246c5.852 0 10.61 4.758 10.61 10.61v71.843h-82.465v-26.879zm277.418-166.539v193.418h-82.465V452a7.504 7.504 0 00-7.504-7.504 7.504 7.504 0 00-7.508 7.504v44.992h-82.464V376.84c0-5.848 4.757-10.606 10.609-10.606h61.246c5.852 0 10.61 4.758 10.61 10.606v37.617a7.504 7.504 0 007.503 7.504 7.501 7.501 0 007.504-7.504V303.574c0-5.851 4.762-10.61 10.614-10.61h8.265c.024 0 .05.005.078.005.024 0 .051-.004.074-.004h52.825c5.851 0 10.613 4.762 10.613 10.61zm-71.855-25.617c-14.125 0-25.618 11.492-25.618 25.617v49.961a25.4 25.4 0 00-8.699-2.23l6.121-49.5c1.203-9.649-3.719-16.043-8.476-22.23-.504-.657-29.672-35.29-29.672-35.29l17.894-54.101 49.29-29.946v117.719zM359.41 72.723V26.406h79.387l-17.098 15.055a10.805 10.805 0 00-3.664 8.105c0 3.102 1.336 6.055 3.664 8.106l17.098 15.055H359.41zm0 0"
          ></path>
        </svg>
        <h4 class="text-navy mt-3 mb-1 font-semibold">Further your career</h4>
        <p class="text-neutral text-xs">
          Don't let your previous skills become the bottleneck of your career
          growth in today's fast-changing skill demands. Upgrade your skills
          today.
        </p>
      </div>

      <!-- Card 4 -->
      <div class="flex flex-col items-center text-center">
        <svg
          class="objective-icon fill-current text-gray-400"
          width="70"
          height="70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-51 0 511 512"
        >
          <defs></defs>
          <path
            d="M299.727 486.852h17.925a7.492 7.492 0 005.856-2.817 7.497 7.497 0 001.46-6.328l-11.863-52.789 30.61 57.937a7.492 7.492 0 006.629 3.997h17.926a7.506 7.506 0 005.988-2.985 7.507 7.507 0 001.222-6.578l-22.113-77.203a3.665 3.665 0 01.168-2.473 7.48 7.48 0 00.426-1.293l14.637-62.539c.004-.008.004-.011.004-.02.015-.066.027-.132.043-.202.02-.094.03-.192.046-.29.024-.14.047-.285.063-.43.012-.124.016-.253.023-.378.004-.098.016-.191.02-.285 0-.012-.004-.024-.004-.031v-.09c0-.016.004-.035.004-.055l-.137-14.293a7.499 7.499 0 00-7.496-7.43h-.074a7.499 7.499 0 00-7.426 7.57l.059 6.622-36.149-.489-1.293-53.988 3.68 1.84a7.497 7.497 0 0010.062-3.352 7.506 7.506 0 00-3.351-10.066l-79.945-39.969c-7.45-3.636-11.707-11.129-11.477-18.906l111.992 54.64c3.649 1.755 6.028 5.505 6.059 9.551l.18 24.817a7.5 7.5 0 007.5 7.445h.054a7.502 7.502 0 007.445-7.555l-.18-24.82c-.066-8.867-4.831-17.125-12.284-21.699a21.902 21.902 0 006.093-9.258l5.512-16.258a21.96 21.96 0 00-1.113-16.879 21.96 21.96 0 00-12.723-11.148l-6.437-2.18a21.961 21.961 0 00-16.88 1.114 21.954 21.954 0 00-11.144 12.722l-5.512 16.258a22.31 22.31 0 00-1.003 4.399l-74.711-36.45v-4.683c0-11.418-6.364-21.64-16.606-26.68l-18.043-8.883.008-24.07c.89-.41 1.762-.887 2.598-1.442a101.1 101.1 0 0030.43-31.41 15.436 15.436 0 007.605 2.028c.95 0 1.91-.086 2.863-.27 4.067-.77 6.742-4.695 5.969-8.766s-4.695-6.742-8.766-5.968c-.105.015-.265-.055-.34-.098-.097-.426.028-1.453.325-2.098.515-1.101 5.855-1.57 9.046-1.851 7.438-.652 17.622-1.547 25.395-9.102 9.945-9.66 12.582-26.847 6.004-39.12C279.59 12.5 269.902 6.276 259.91 5.968c-3.363-.114-6.383.293-9.058 1.054C249.477 2.95 245.625 0 241.094 0h-90.278c-4.574 0-8.457 3-9.796 7.137a30.03 30.03 0 00-9.254-1.164c-9.993.308-19.676 6.53-24.672 15.855-6.582 12.274-3.946 29.461 6 39.121 7.777 7.555 17.957 8.45 25.394 9.102 3.192.277 8.535.75 9.047 1.851.297.641.422 1.653.328 2.09-.093.059-.246.121-.34.106a7.496 7.496 0 00-8.77 5.968 7.504 7.504 0 005.974 8.766c.953.184 1.91.27 2.863.27a15.46 15.46 0 007.5-1.97 101.01 101.01 0 0029.566 31.204 19.265 19.265 0 003.797 2.012v23.648l-18.039 8.879c-10.238 5.043-16.602 15.266-16.602 26.68v5.37l-35.808 17.473a7.498 7.498 0 00-3.45 10.028 7.497 7.497 0 0010.028 3.453l33.484-16.34c.23 7.781-4.039 15.277-11.535 18.938l-79.883 39.941a7.497 7.497 0 00-3.351 10.062 7.492 7.492 0 0010.062 3.352l3.68-1.84-1.293 53.988-36.168.489.438-60.735c.03-4.05 2.414-7.8 6.101-9.574l53.04-25.879a7.497 7.497 0 003.448-10.027 7.497 7.497 0 00-10.027-3.453l-12.066 5.886a22.31 22.31 0 00-1.004-4.398l-5.512-16.254a21.943 21.943 0 00-11.148-12.726c-5.293-2.614-11.286-3.012-16.88-1.114l-6.433 2.18c-5.59 1.898-10.11 5.855-12.723 11.148-2.613 5.297-3.011 11.29-1.113 16.88l5.508 16.257a21.959 21.959 0 006.098 9.262c-7.465 4.59-12.22 12.84-12.29 21.703l-.492 68.395v.046c0 .036-.003.07-.003.11.003.086.015.172.02.258 0 .046-.005.09 0 .136 1.96 29.504 3.925 62.727 3.839 68.246L6.48 477.29a7.501 7.501 0 001.22 6.582 7.506 7.506 0 005.987 2.984h17.926a7.495 7.495 0 006.63-3.996l30.616-57.957-11.863 52.805a7.5 7.5 0 007.316 9.145h17.922a7.499 7.499 0 006.938-4.649l30.914-75.195c1.883-3.793 1.078-8.801-3.012-19.633-2.422-6.414-6.043-14.86-10.762-25.11-6.488-14.097-13.34-27.863-15.703-32.57l1.614-67.293 60.949-30.476c13.848-6.762 21.328-21.203 19.687-35.703h47.598a35.234 35.234 0 0019.625 35.672l61.016 30.507 1.593 66.625-37.64 51.72a22.463 22.463 0 00-3.114 26.401l30.852 75.055a7.503 7.503 0 006.938 4.649zM40.262 206.164a7.07 7.07 0 014.086-3.582l6.437-2.18a7.08 7.08 0 015.422.356 7.058 7.058 0 013.586 4.09l5.508 16.254a7.04 7.04 0 01-.36 5.425 7.044 7.044 0 01-4.086 3.582l-6.433 2.18c-3.711 1.262-7.75-.734-9.008-4.441l-5.512-16.258a7.06 7.06 0 01.36-5.426zM27.094 471.852h-3.457l19.375-67.637c.433-1.524 1.023-3.578-2.985-64.75l33.47-.453 1.218-.016c-2.82 25.918-6.156 52.262-7.563 57.031zm50.117 0h-3.527l12.859-57.23A13.062 13.062 0 0084.91 403l-2.906-4.676c1.078-4.785 2.492-14.02 4.797-33.12.3-2.49.594-4.974.875-7.4 9.496 19.989 17.469 38.516 18.304 44.063zM328.02 221.105l5.507-16.257a7.058 7.058 0 013.586-4.09 7.08 7.08 0 015.422-.355l6.434 2.179a7.065 7.065 0 014.09 3.582 7.06 7.06 0 01.359 5.426l-5.512 16.258c-1.254 3.707-5.297 5.703-9.004 4.441l-6.433-2.18a7.052 7.052 0 01-4.09-3.582 7.032 7.032 0 01-.36-5.422zM259.445 20.961c5.352.168 9.93 4.238 11.922 7.953 3.406 6.352 1.89 16.293-3.234 21.277-3.95 3.836-9.926 4.36-16.254 4.918-.883.075-1.793.157-2.711.25a101.287 101.287 0 002.07-15.664c1.977.028 3.567-.273 4.348-.465a7.5 7.5 0 005.52-9.054c-.973-4.028-5.02-6.492-9.051-5.524a3 3 0 01-.66.051v-1.008c.015-.07.03-.144.054-.207.395-1.082 4.13-2.636 7.996-2.527zM139.797 55.109c-6.328-.558-12.3-1.082-16.25-4.918-5.129-4.984-6.64-14.925-3.234-21.277 1.988-3.715 6.566-7.785 11.917-7.953 3.86-.102 7.606 1.445 7.997 2.527.125.336.152.867.105 1.215a3.003 3.003 0 01-.707-.05c-4.023-.97-8.074 1.495-9.05 5.519a7.502 7.502 0 005.519 9.058c.808.196 2.476.512 4.547.461.25 5.309.918 10.551 1.98 15.68-.96-.098-1.906-.184-2.824-.262zm15.719-20.21V15h80.879v7.984c-.06.84-.06 1.696 0 2.559v8.695c0 28.934-14.434 55.75-38.61 71.73a4.186 4.186 0 01-4.683-.027c-23.536-16.046-37.586-42.605-37.586-71.043zm13.297 144.652c0-5.653 3.152-10.719 8.226-13.219l18.91-9.312 18.922 9.312c5.074 2.5 8.227 7.563 8.227 13.223v1.668h-54.285zm189.507 292.3h-3.457l-39.726-75.195a.357.357 0 00-.028-.054l-.34-.641a7.424 7.424 0 00-.816-1.234 4.28 4.28 0 01-.797-3.864c.14-.488.23-.988.27-1.496l3.777-50.387 16.707.223 17.957.242-12.375 52.883a18.689 18.689 0 00-.543 11.887zm-83.226-71.917a7.47 7.47 0 011.074-9.114c.258-.265.5-.547.719-.847l23.914-32.86-2.281 30.465a19.282 19.282 0 001.066 12.102l-2.219 2.875c-.047.062-.094.12-.137.183a13.065 13.065 0 00-1.812 11.887l12.86 57.227h-3.524l-29.14-70.891c-.15-.356-.321-.7-.52-1.027zm0 0M373.96 497h-29.698c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5h29.699c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5zm0 0M320.344 497h-29.7c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5h29.7c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5zm0 0M37.7 497H8c-4.14 0-7.5 3.355-7.5 7.5S3.86 512 8 512h29.7c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5zm0 0M91.313 497h-29.7c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5h29.7c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5zm0 0M19.54 77.281a7.502 7.502 0 004.437 13.551 7.43 7.43 0 004.421-1.45c9.43-6.898 18.665-15.21 15.668-24.534-1.718-5.348-6.53-7.371-9.496-8.575 1.125-1.41 3.278-3.648 7.352-6.855 3.254-2.559 3.816-7.273 1.258-10.531a7.504 7.504 0 00-10.535-1.254c-7.942 6.25-16.672 14.601-13.637 23.77 1.695 5.117 6.148 7.218 9.16 8.456-1.367 1.547-3.914 3.97-8.629 7.422zm0 0"
          ></path>
          <path
            d="M87.29 117.777c4.073 3.203 6.222 5.442 7.35 6.852-2.964 1.203-7.777 3.23-9.495 8.574-2.993 9.328 6.238 17.637 15.664 24.54a7.476 7.476 0 004.425 1.448 7.504 7.504 0 004.438-13.554c-4.715-3.45-7.262-5.875-8.629-7.418 3.012-1.242 7.465-3.344 9.156-8.461 3.04-9.168-5.691-17.52-13.636-23.77a7.496 7.496 0 00-10.532 1.258 7.503 7.503 0 001.258 10.531zm0 0M57.86 114.656c3.37 0 6.113-2.746 6.113-6.125 0-3.375-2.743-6.12-6.114-6.12s-6.113 2.745-6.113 6.12c0 3.38 2.742 6.125 6.113 6.125zm0 0M12.996 154.785c3.371 0 6.113-2.75 6.113-6.125s-2.742-6.12-6.113-6.12-6.113 2.745-6.113 6.12 2.742 6.125 6.113 6.125zm0 0M66.906 28.844c3.371 0 6.114-2.746 6.114-6.121 0-3.38-2.743-6.125-6.114-6.125s-6.113 2.746-6.113 6.125c0 3.375 2.742 6.12 6.113 6.12zm0 0M316.32 77.281a7.499 7.499 0 108.856 12.102c9.43-6.899 18.66-15.207 15.668-24.535-1.719-5.348-6.531-7.371-9.496-8.575 1.125-1.41 3.277-3.648 7.351-6.855a7.499 7.499 0 10-9.273-11.785c-7.946 6.25-16.676 14.601-13.637 23.77 1.691 5.117 6.145 7.218 9.156 8.456-1.363 1.547-3.91 3.97-8.625 7.422zm0 0M406.45 145.637c-4.716-3.45-7.266-5.875-8.63-7.418 3.012-1.242 7.465-3.344 9.16-8.461 3.036-9.168-5.695-17.52-13.636-23.77a7.504 7.504 0 00-10.535 1.254 7.508 7.508 0 001.257 10.535c4.075 3.203 6.227 5.442 7.352 6.852-2.965 1.203-7.777 3.23-9.496 8.574-2.996 9.324 6.238 17.637 15.668 24.54a7.474 7.474 0 004.422 1.448 7.502 7.502 0 004.438-13.555zm0 0M354.637 114.656c3.37 0 6.113-2.746 6.113-6.125 0-3.375-2.742-6.12-6.113-6.12-3.371 0-6.114 2.745-6.114 6.12 0 3.38 2.743 6.125 6.114 6.125zm0 0M309.773 154.785c3.372 0 6.114-2.75 6.114-6.125s-2.742-6.12-6.114-6.12c-3.37 0-6.113 2.745-6.113 6.12s2.742 6.125 6.113 6.125zm0 0M363.684 28.844c3.37 0 6.113-2.746 6.113-6.121 0-3.38-2.742-6.125-6.113-6.125s-6.114 2.746-6.114 6.125c0 3.375 2.743 6.12 6.114 6.12zm0 0"
          ></path>
        </svg>
        <h4 class="text-navy mt-3 mb-1 font-semibold">Upskill your team</h4>
        <p class="text-neutral text-xs">
          With our tailored training approaches, give your team the latest
          skillsets needed for the optimum productivity; stay ahead of the
          competition.
        </p>
      </div>
    </div>
  </section>

  <Divider />

  <!-- Courses -->
  <section class="pt-20 pb-30 text-center">
    <div class="flex flex-col items-center justify-center">
      <h4 class="text-secondary mb-2 text-lg font-bold">Courses</h4>
      <h1 class="text-title mb-10 text-5xl font-bold">
        What can <span class="text-primary">you</span> do?
      </h1>
      <p class="text-neutral max-w-[33rem]">
        We provide comprehensive certification services to professionals like
        you. Here are some of the learning channels we offer to effectuate your
        professional growth.
      </p>
    </div>

    <div
      class="grid grid-cols-1 gap-8 px-5 py-12 sm:grid-cols-2 md:mx-[5%] md:grid-cols-3 lg:mx-[15%] lg:grid-cols-4"
    >
      <a
        href="#"
        class="bg-background block h-full transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div
          class="flex h-full flex-col items-center border border-[#373d4f] p-8 text-center"
        >
          <img
            src="https://static.certscope.org/assets/files/media/icons/certscope-courses-health-and-safety.svg"
            height="60"
            width="60"
            alt="CertScope Trainings"
          />
          <h3 class="text-neutral mt-4 font-bold">Health and Safety</h3>
        </div>
      </a>

      <a
        href="#"
        class="bg-background block h-full transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div
          class="flex h-full flex-col items-center border border-[#373d4f] p-8 text-center"
        >
          <img
            src="https://static.certscope.org/assets/files/media/icons/certscope-courses-cloud-computing.svg"
            height="60"
            width="60"
            alt="CertScope Trainings"
          />
          <h3 class="text-neutral mt-4 font-bold">Cloud Computing</h3>
        </div>
      </a>

      <a
        href="#"
        class="bg-background block h-full transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div
          class="flex h-full flex-col items-center border border-[#373d4f] p-8 text-center"
        >
          <img
            src="https://static.certscope.org/assets/files/media/icons/certscope-courses-ux-and-design-thinking.svg"
            height="60"
            width="60"
            alt="CertScope Trainings"
          />
          <h3 class="text-neutral mt-4 font-bold">UX and Design Thinking</h3>
        </div>
      </a>

      <a
        href="#"
        class="bg-background block h-full transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div
          class="flex h-full flex-col items-center border border-[#373d4f] p-8 text-center"
        >
          <img
            src="https://static.certscope.org/assets/files/media/icons/certscope-courses-agile-and-scrum.svg"
            height="60"
            width="60"
            alt="CertScope Trainings"
          />
          <h3 class="text-neutral mt-4 font-bold">Agile and Scrum</h3>
        </div>
      </a>

      <a
        href="#"
        class="bg-background block h-full transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div
          class="flex h-full flex-col items-center border border-[#373d4f] p-8 text-center"
        >
          <img
            src="https://static.certscope.org/assets/files/media/icons/certscope-courses-devops.svg"
            height="60"
            width="60"
            alt="CertScope Trainings"
          />
          <h3 class="text-neutral mt-4 font-bold">DevOps</h3>
        </div>
      </a>

      <a
        href="#"
        class="bg-background block h-full transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div
          class="flex h-full flex-col items-center border border-[#373d4f] p-8 text-center"
        >
          <img
            src="https://static.certscope.org/assets/files/media/icons/certscope-courses-it-service-management.svg"
            height="60"
            width="60"
            alt="CertScope Trainings"
          />
          <h3 class="text-neutral mt-4 font-bold">IT Service Management</h3>
        </div>
      </a>

      <a
        href="#"
        class="bg-background block h-full transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div
          class="flex h-full flex-col items-center border border-[#373d4f] p-8 text-center"
        >
          <img
            src="https://static.certscope.org/assets/files/media/icons/certscope-courses-cloud-computing.svg"
            height="60"
            width="60"
            alt="CertScope Trainings"
          />
          <h3 class="text-neutral mt-4 font-bold">Big Data</h3>
        </div>
      </a>

      <a
        href="#"
        class="bg-background block h-full transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div
          class="flex h-full flex-col items-center border border-[#373d4f] p-8 text-center"
        >
          <img
            src="https://static.certscope.org/assets/files/media/icons/certscope-courses-digital-marketing.svg"
            height="60"
            width="60"
            alt="CertScope Trainings"
          />
          <h3 class="text-neutral mt-4 font-bold">Digital Marketing</h3>
        </div>
      </a>

      <a
        href="#"
        class="bg-background block h-full transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div
          class="flex h-full flex-col items-center border border-[#373d4f] p-8 text-center"
        >
          <img
            src="https://static.certscope.org/assets/files/media/icons/certscope-courses-quality-management.svg"
            height="60"
            width="60"
            alt="CertScope Trainings"
          />
          <h3 class="text-neutral mt-4 font-bold">Quality Management</h3>
        </div>
      </a>
    </div>
    <button
      class="text-background bg-primary focus:outline-primary cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-transform duration-300 ease-in-out hover:-translate-y-[3px] focus:outline-2 focus:outline-offset-2"
    >
      EXPLORE ALL
    </button>
  </section>

  <Divider />

  <!-- What's new -->
  <section class="pt-25">
    <div class="flex flex-col items-center justify-center">
      <h4 class="text-secondary mb-2 text-lg font-bold">Updates</h4>
      <h1 class="text-title mb-10 text-5xl font-bold">
        What is <span class="text-primary">new?</span>
      </h1>
      <p class="text-neutral max-w-[33rem] text-center text-sm">
        Check our latest updates in the training calendar, resources and blogs
        for professionals like you. We keep updating them.
      </p>
    </div>

    <section class="flex justify-center">
      <!-- Cards Container -->
      <div
        class="grid max-w-4xl grid-cols-1 gap-5 px-10 pt-20 pb-25 md:grid-cols-3"
      >
        <!-- Card 1 -->
        <div
          class="bg-background flex max-w-[250px] flex-col items-center justify-self-center border border-[#373d4f] px-6 py-5 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            class="h-[150px] w-[150px] object-contain"
            src="https://static.certscope.org/assets/static/svg/undraw_Online_learning.svg"
            alt="Live Online Calendar"
          />
          <h3 class="text-neutral mt-6 text-center font-bold">
            Live Online Calendar
          </h3>
          <p class="text-neutral h-mt-1 text-center text-xs">
            Browse latest live online trainings
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-background flex max-w-[250px] flex-col items-center justify-self-center border border-[#373d4f] px-6 py-5 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            class="h-[150px] w-[150px] object-contain md:object-cover"
            src="https://static.certscope.org/assets/static/svg/undraw_teaching.svg"
            alt="Classroom Calendar"
          />
          <h3 class="text-neutral mt-6 text-center font-bold">
            Classroom Calendar
          </h3>
          <p class="text-neutral h-mt-1 text-center text-xs">
            Browse latest live online trainings
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-background flex max-w-[250px] flex-col items-center justify-self-center border border-[#373d4f] px-6 py-5 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            class="h-[150px] w-[200px] object-contain md:object-cover"
            src="https://static.certscope.org/assets/static/svg/undraw_online_reading.svg"
            alt="Resources"
          />
          <h3 class="text-neutral mt-6 text-center font-bold">Resources</h3>
          <p class="text-neutral h-mt-1 text-center text-xs">
            Browse latest live online trainings
          </p>
        </div>
      </div>
    </section>
  </section>

  <Divider />

  <!-- Services -->
  <section class="py-25">
    <div class="flex flex-col items-center justify-center">
      <h4 class="text-secondary mb-2 text-lg font-bold">Services</h4>
      <h1 class="text-title mb-10 text-5xl font-bold">
        What can we <span class="text-primary">do?</span>
      </h1>
      <p class="text-neutral mb-10 max-w-[33rem] text-center text-sm">
        We provide comprehensive services to the end-users. Our customers span
        across various industries, geographical regions, and areas of expertise.
        Here are some of the services we provide.
      </p>
    </div>

    <div class="mx-auto flex max-w-3xl justify-center">
      <ul
        class="px-auto grid grid-cols-2 gap-x-5 gap-y-0 text-sm md:grid-cols-3"
      >
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">Agile training and consulting </span>
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">Content development </span>
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">Onsite training </span>
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">Public workshops </span>
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">Boot camps </span>
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">Onsite workshops </span>
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">Compliance training </span>
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">Certification</span>
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">Examination services </span>
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">Learning management </span>
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">ITSM and BSM Consulting </span>
        </li>
        <li class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-primary feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
          <span class="text-neutral pl-2">ISO certification</span>
        </li>
      </ul>
    </div>

    <div class="mt-15 text-center">
      <button
        class="text-background bg-primary focus:outline-primary cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-transform duration-300 ease-in-out hover:-translate-y-[3px] focus:outline-2 focus:outline-offset-2"
      >
        FIND OUT MORE
      </button>
    </div>
  </section>

  <Divider />

  <!-- Clients -->
  <section class="py-25">
    <div class="flex flex-col items-center justify-center text-center">
      <h4 class="text-secondary mb-2 text-lg font-bold">Clients</h4>

      <h1 class="text-title mb-10 text-5xl font-bold">
        Who we have <span class="text-primary">worked</span> with?
      </h1>

      <p class="text-neutral mb-10 max-w-[33rem] text-center text-sm">
        We are a trusted name for many top-tier companies. We have worked with
        many organisations across different sectors and geographical regions,
        assisting them in achieving their organisational objectives. We take
        pride in lending our hand in creating the kind of professional
        environment that would fulfill the vision that enterprises are built
        upon. Some of our notable clients are:
      </p>
      <div class="flex justify-center">
        <ul class="flex flex-wrap justify-center gap-2">
          <li
            class="bg-background box-border h-25 w-25 border border-gray-100/10 p-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src="https://static.certscope.org/assets/static/clients/atc-gov-dark.svg"
              class="h-full w-full"
              alt="img"
            />
          </li>
          <li
            class="bg-background box-border h-25 w-25 border border-gray-100/10 p-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src="https://static.certscope.org/assets/static/clients/Microsoft_logo.svg"
              class="h-full w-full"
              alt="img"
            />
          </li>
          <li
            class="bg-background box-border h-25 w-25 border border-gray-100/10 p-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src="https://static.certscope.org/assets/static/clients/IBM_logo.svg"
              class="h-full w-full"
              alt="img"
            />
          </li>
          <li
            class="bg-background box-border h-25 w-25 border border-gray-100/10 p-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src="https://static.certscope.org/assets/static/clients/Sap-logo.png"
              class="h-full w-full"
              alt="img"
            />
          </li>
          <li
            class="bg-background box-border h-25 w-25 border border-gray-100/10 p-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src="https://static.certscope.org/assets/static/clients/Dell_Logo.svg"
              class="h-full w-full"
              alt="img"
            />
          </li>
          <li
            class="bg-background box-border h-25 w-25 border border-gray-100/10 p-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src="https://static.certscope.org/assets/static/clients/infosys-logo.svg"
              class="h-full w-full"
              alt="img"
            />
          </li>
          <li
            class="bg-background box-border h-25 w-25 border border-gray-100/10 p-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/zebra-technologies-logo.svg"
              class="h-full w-full"
              alt="img"
            />
          </li>
          <li
            class="bg-background box-border h-25 w-25 border border-gray-100/10 p-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src="https://static.certscope.org/assets/static/clients/holcim-logo.svg"
              class="h-full w-full"
              alt="img"
            />
          </li>
          <li
            class="bg-background box-border h-25 w-25 border border-gray-100/10 p-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src="https://static.certscope.org/assets/static/clients/sete-logo.png"
              class="h-full w-full"
              alt="img"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>

  <Divider />

  <!-- Why choose us -->
  <section class="pt-25">
    <div class="flex flex-col items-center justify-center">
      <h4 class="text-secondary mb-2 text-lg font-bold">Advantages</h4>
      <h1 class="text-title mb-10 text-5xl font-bold">
        Why <span class="text-primary">choose</span> us?
      </h1>
      <p class="text-neutral max-w-[33rem] text-center text-sm">
        We provide dedicated and customised services to our customers, no matter
        what. We try our best to set ourselves apart from the crowd, so you can
        get what you require.
      </p>
    </div>

    <section class="flex justify-center">
      <!-- Cards Container -->
      <div
        class="grid max-w-4xl grid-cols-1 gap-5 px-10 pt-20 pb-25 md:grid-cols-3"
      >
        <!-- Card 1 -->
        <div
          class="bg-background flex max-w-[250px] flex-col items-center justify-self-center border border-[#373d4f] px-6 py-5 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <svg
            id="e206c98e-a062-454f-98a1-36dd7d468c34"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="150px"
            height="150px"
            viewBox="0 0 897.0589 606.13"
          >
            <path
              d="M1039.79947,146.935h-607a8.72734,8.72734,0,0,0-8.71972,8.72v219.41h146.8999a15.01828,15.01828,0,0,1,15,15v185.63h453.81982a8.71245,8.71245,0,0,0,6.63037-3.06,2.0439,2.0439,0,0,0,.18994-.24,8.16642,8.16642,0,0,0,1.25-2.11005,8.507,8.507,0,0,0,.65967-3.31V155.655A8.72954,8.72954,0,0,0,1039.79947,146.935Z"
              transform="translate(-151.47055 -146.935)"
              fill="#f2f2f2"
            ></path>
            <rect
              x="273.84973"
              y="34.95117"
              width="621.95676"
              height="2.49281"
              fill="#ccc"
            ></rect>
            <circle
              cx="295.03863"
              cy="18.69806"
              r="7.47844"
              fill="#ccc"
            ></circle>
            <circle
              cx="316.53914"
              cy="18.69806"
              r="7.47844"
              fill="#ccc"
            ></circle>
            <circle
              cx="338.03965"
              cy="18.69806"
              r="7.47844"
              fill="#ccc"
            ></circle>
            <path
              d="M892.29947,236.315h-312a13,13,0,0,0,0,26h312a13,13,0,0,0,0-26Zm0,24h-312a11,11,0,0,1,0-22h312a11,11,0,0,1,0,22Z"
              transform="translate(-151.47055 -146.935)"
              fill="#ccc"
            ></path>
            <path
              d="M987.76969,339.885h-312a13,13,0,0,0,0,26h312a13,13,0,0,0,0-26Z"
              transform="translate(-151.47055 -146.935)"
              fill="#fff"
            ></path>
            <path
              d="M987.76969,387.885h-312a13,13,0,0,0,0,26h312a13,13,0,0,0,0-26Z"
              transform="translate(-151.47055 -146.935)"
              fill="#fff"
            ></path>
            <path
              d="M987.76969,435.885h-312a13,13,0,0,0,0,26h312a13,13,0,0,0,0-26Z"
              transform="translate(-151.47055 -146.935)"
              fill="#fff"
            ></path>
            <path
              d="M625.34976,318.385h-142.02a11.50392,11.50392,0,0,0-11.49024,11.49v45.19h2v-45.19a9.50457,9.50457,0,0,1,9.49024-9.49h142.02a9.49788,9.49788,0,0,1,9.48975,9.49v142.02a9.49788,9.49788,0,0,1-9.48975,9.49H585.97965v2h39.37011a11.49727,11.49727,0,0,0,11.48975-11.49V329.875A11.49723,11.49723,0,0,0,625.34976,318.385Z"
              transform="translate(-151.47055 -146.935)"
              fill="#ccc"
            ></path>
            <path
              d="M257.0941,464.50258c-.50236.02033-21.91024-1.464-22.45679-1.48242l1.9231-19.19727,12.19336-.36718,23.3-43.15528c-3.23157-6.162.745-14.33826,7.60026-15.59852,13.81387-3.13979,18.55923,18.59332,4.70321,21.48524l-19.27222,52.7334A8.54966,8.54966,0,0,1,257.0941,464.50258Z"
              transform="translate(-151.47055 -146.935)"
              fill="#ffb8b8"
            ></path>
            <path
              d="M200.65489,474.39028c-20.3716.05-22.15993-30.73767-1.74315-32.90723,53.9884-3.26208,47.15636-16.82179,51.25631,23.17516a4.5045,4.5045,0,0,1-3.9946,4.95375l-43.75025,4.68359A16.63489,16.63489,0,0,1,200.65489,474.39028Z"
              transform="translate(-151.47055 -146.935)"
              fill="#356ae6"
            ></path>
            <path
              d="M196.00552,377.0499c28.06453,15.96985,5.02494,58.10625-23.56276,43.10183C144.37912,404.18242,167.41871,362.046,196.00552,377.0499Z"
              transform="translate(-151.47055 -146.935)"
              fill="#ffb8b8"
            ></path>
            <polygon
              points="70.049 592.823 82.308 592.822 88.141 545.534 70.047 545.535 70.049 592.823"
              fill="#ffb8b8"
            ></polygon>
            <path
              d="M218.89263,751.14218l38.53073-.00176c-.14718-19.88089-25.9182-14.15221-38.53141-14.88512Z"
              transform="translate(-151.47055 -146.935)"
              fill="#2f2e41"
            ></path>
            <polygon
              points="17.049 592.823 29.308 592.822 35.141 545.534 17.047 545.535 17.049 592.823"
              fill="#ffb8b8"
            ></polygon>
            <path
              d="M165.89263,751.14218l38.53073-.00176c-.14718-19.88089-25.9182-14.15221-38.53141-14.88512Z"
              transform="translate(-151.47055 -146.935)"
              fill="#2f2e41"
            ></path>
            <path
              d="M182.4525,723.24282c-2.963-.81313-19.06382,1.646-20.964-1.582-6.636-66.51114-5.16091-131.60265,9.56972-167.37011l50.6482-3.10059c11.32584,20.6755,37.36026,157.87463,21.6559,166.21643l-20.19448.7201a5.01824,5.01824,0,0,1-5.0393-3.82618l-16.89478-96.11718c-4.20722-5.881-12.4773,101.22422-13.843,100.82371A4.97808,4.97808,0,0,1,182.4525,723.24282Z"
              transform="translate(-151.47055 -146.935)"
              fill="#2f2e41"
            ></path>
            <path
              d="M169.44957,562.69789c-25.57159-26.75341-9.26039-98.47865-10.08593-96.95311.07006-1.757,5.862-28.816,20.84448-33.25691,11.8867-3.92293,25.04321,7.81175,26.66606,19.68051l17.80635,105.15331a3.69838,3.69838,0,0,1-1.01367,3.18C224.54239,563.22778,170.70142,562.15165,169.44957,562.69789Z"
              transform="translate(-151.47055 -146.935)"
              fill="#356ae6"
            ></path>
            <path
              d="M177.74856,395.86826c2.24569-1.41969,3.35253-3.8545,4.65967-6.07256,6.88544-3.92419,14.80077,5.56884,22.08344,2.026,20.59268-19.76915-.57431-25.60141-19.54049-26.64389-4.48038-.55218-8.29173,1.03713-11.6791,3.66209-37.88569-2.89341-19.71625,47.48278,4.19421,54.13638,4.22161,1.84908,7.38845-1.8935,3.66551-5.29548C175.98091,412.28066,169.60018,401.41075,177.74856,395.86826Z"
              transform="translate(-151.47055 -146.935)"
              fill="#2f2e41"
            ></path>
            <path
              d="M570.97965,373.065h-274a17.02411,17.02411,0,0,0-17,17v346a17.0241,17.0241,0,0,0,17,17h274a17.02411,17.02411,0,0,0,17-17v-346A17.02412,17.02412,0,0,0,570.97965,373.065Zm15,363a15.01828,15.01828,0,0,1-15,15h-274a15.01828,15.01828,0,0,1-15-15v-346a15.01828,15.01828,0,0,1,15-15h274a15.01828,15.01828,0,0,1,15,15Z"
              transform="translate(-151.47055 -146.935)"
              fill="#3f3d56"
            ></path>
            <path
              d="M219.77721,518.66274c-9.0306,1.02306-12.99534-19.99215-16.448-25.34668l17.98486-6.9834,5.85205,10.70312,49.02808,1.21875a10.67752,10.67752,0,0,1,.95239-1.12011h0c9.72314-10.18066,25.55743,5.07331,15.87108,15.2321a11.03583,11.03583,0,0,1-16.49657-.47722C275.31032,511.97567,220.96126,518.69451,219.77721,518.66274Z"
              transform="translate(-151.47055 -146.935)"
              fill="#ffb8b8"
            ></path>
            <path
              d="M206.45836,508.63149c-3.0069,2.89718-26.09073-37.77326-27.77718-38.92289-11.66432-18.12981,15.79569-36.02983,27.661-17.99809l23.99705,36.879a4.50461,4.50461,0,0,1-1.31738,6.22558C227.92818,495.32714,207.23017,509.73279,206.45836,508.63149Z"
              transform="translate(-151.47055 -146.935)"
              fill="#356ae6"
            ></path>
            <path
              d="M516.98006,612.565h-166c-16.957-.08167-17.0275-25.9115.00084-26l165.99916,0C533.92512,586.64438,534.01695,612.47622,516.98006,612.565Z"
              transform="translate(-151.47055 -146.935)"
              fill="#ccc"
            ></path>
            <path
              d="M516.98006,660.565h-166c-16.957-.08167-17.0275-25.9115.00084-26l165.99916,0C533.92512,634.64438,534.01695,660.47622,516.98006,660.565Z"
              transform="translate(-151.47055 -146.935)"
              fill="#ccc"
            ></path>
            <path
              d="M516.98006,708.565h-166c-16.957-.08167-17.0275-25.9115.00084-26l165.99916,0C533.92512,682.64438,534.01695,708.47622,516.98006,708.565Z"
              transform="translate(-151.47055 -146.935)"
              fill="#ccc"
            ></path>
            <path
              d="M578.97965,405.065a26,26,0,1,1,26-26A26.02947,26.02947,0,0,1,578.97965,405.065Z"
              transform="translate(-151.47055 -146.935)"
              fill="#356ae6"
            ></path>
            <path
              d="M590.97965,378.065h-11v-12.5a1,1,0,0,0-2,0v12.5h-11a1,1,0,0,0,0,2h11v12.5a1,1,0,1,0,2,0v-12.5h11a1,1,0,0,0,0-2Z"
              transform="translate(-151.47055 -146.935)"
              fill="#fff"
            ></path>
            <path
              d="M513.97965,555.36481h-160a16.51867,16.51867,0,0,1-16.5-16.5V449.2652a16.51866,16.51866,0,0,1,16.5-16.5h160a16.51867,16.51867,0,0,1,16.5,16.5v89.59961A16.51868,16.51868,0,0,1,513.97965,555.36481Z"
              transform="translate(-151.47055 -146.935)"
              fill="#356ae6"
            ></path>
          </svg>
          <h3 class="text-neutral mt-6 text-center font-bold">
            Accredited Content
          </h3>
          <p class="text-neutral h-mt-1 text-center text-xs">
            Accredited content from governing bodies.
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-background flex max-w-[250px] flex-col items-center justify-self-center border border-[#373d4f] px-6 py-5 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            class="h-[150px] w-[150px] object-contain md:object-cover"
            src="https://static.certscope.org/assets/static/svg/undraw_teaching.svg"
            alt="Classroom Calendar"
          />
          <h3 class="text-neutral mt-6 text-center font-bold">
            Assured sessions
          </h3>
          <p class="text-neutral h-mt-1 text-center text-xs">
            Assured on-time training delivery globally.
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-background flex max-w-[250px] flex-col items-center justify-self-center border border-[#373d4f] px-6 py-5 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            class="h-[150px] w-[200px] object-contain md:object-cover"
            src="@images/flexiblePathways.svg"
            alt="Resources"
          />
          <h3 class="text-neutral mt-6 text-center font-bold">
            Flexible Pathways
          </h3>
          <p class="text-neutral h-mt-1 text-center text-xs">
            Choose which delivery method suits you and when.
          </p>
        </div>

        <!-- Card 4 -->
        <div
          class="bg-background flex max-w-[250px] flex-col items-center justify-self-center border border-[#373d4f] px-6 py-5 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            class="h-[150px] w-[200px] object-contain md:object-cover"
            src="@images/flexiblePathways.svg"
            alt="Resources"
          />
          <h3 class="text-neutral mt-6 text-center font-bold">
            Measurable solutions
          </h3>
          <p class="text-neutral h-mt-1 text-center text-xs">
            Assessable and scalabale training solutions.
          </p>
        </div>

        <!-- Card 5 -->
        <div
          class="bg-background flex max-w-[250px] flex-col items-center justify-self-center border border-[#373d4f] px-6 py-5 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            class="h-[150px] w-[200px] object-contain md:object-cover"
            src="@images/flexiblePathways.svg"
            alt="Resources"
          />
          <h3 class="text-neutral mt-6 text-center font-bold">
            Mentorship program
          </h3>
          <p class="text-neutral h-mt-1 text-center text-xs">
            One-on-one mentoring for professionals by experts.
          </p>
        </div>

        <!-- Card 6 -->
        <div
          class="bg-background flex max-w-[250px] flex-col items-center justify-self-center border border-[#373d4f] px-6 py-5 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            class="h-[150px] w-[200px] object-contain md:object-cover"
            src="@images/flexiblePathways.svg"
            alt="Resources"
          />
          <h3 class="text-neutral mt-6 text-center font-bold">
            Project based training
          </h3>
          <p class="text-neutral mt-1 text-center text-xs">
            Industry based live case studies for all classes.
          </p>
        </div>
      </div>
    </section>
  </section>
  <Divider />
</template>
