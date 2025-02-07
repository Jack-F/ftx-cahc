"use client";

import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/components/navigation";

export const LanguageSelector = function () {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const switchLocale = (locale: string) => {
    router.push(pathName, { locale: locale });
  };

  return (
    <Listbox onChange={switchLocale} name="language" defaultValue={locale}>
      <ListboxOption value="en" key="en">
        {/* from https://svgflags.com/ */}
        <div className="w-5 sm:w-4">
          <svg
            enableBackground="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="256" cy="256" fill="#f0f0f0" r="256" />
            <g fill="#0052b4">
              <path d="m52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178z" />
              <path d="m503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076z" />
              <path d="m8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075z" />
              <path d="m411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177z" />
              <path d="m100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102v-133.176z" />
              <path d="m189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075z" />
              <path d="m322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075z" />
              <path d="m370.005 322.784 89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076z" />
            </g>
            <g fill="#d80027">
              <path d="m509.833 222.609h-220.44-.001v-220.442c-10.931-1.423-22.075-2.167-33.392-2.167-11.319 0-22.461.744-33.391 2.167v220.44.001h-220.442c-1.423 10.931-2.167 22.075-2.167 33.392 0 11.319.744 22.461 2.167 33.391h220.44.001v220.442c10.931 1.423 22.073 2.167 33.392 2.167 11.317 0 22.461-.743 33.391-2.167v-220.44-.001h220.442c1.423-10.931 2.167-22.073 2.167-33.392 0-11.317-.744-22.461-2.167-33.391z" />
              <path d="m322.783 322.784 114.236 114.236c5.254-5.252 10.266-10.743 15.048-16.435l-97.802-97.802h-31.482z" />
              <path d="m189.217 322.784h-.002l-114.235 114.235c5.252 5.254 10.743 10.266 16.435 15.048l97.802-97.804z" />
              <path d="m189.217 189.219v-.002l-114.236-114.237c-5.254 5.252-10.266 10.743-15.048 16.435l97.803 97.803h31.481z" />
              <path d="m322.783 189.219 114.237-114.238c-5.252-5.254-10.743-10.266-16.435-15.047l-97.802 97.803z" />
            </g>
          </svg>
        </div>
        <ListboxLabel>EN</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="es" key="es">
        <div className="w-5 sm:w-4">
          <svg
            enableBackground="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m0 256c0 31.314 5.633 61.31 15.923 89.043l240.077 22.261 240.077-22.261c10.29-27.733 15.923-57.729 15.923-89.043s-5.633-61.31-15.923-89.043l-240.077-22.261-240.077 22.261c-10.29 27.733-15.923 57.729-15.923 89.043z"
              fill="#ffda44"
            />
            <g fill="#d80027">
              <path d="m496.077 166.957c-36.171-97.484-130.006-166.957-240.077-166.957s-203.906 69.473-240.077 166.957z" />
              <path d="m15.923 345.043c36.171 97.484 130.006 166.957 240.077 166.957s203.906-69.473 240.077-166.957z" />
            </g>
          </svg>
        </div>
        <ListboxLabel>ES</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="ko" key="ko">
        <div className="w-5 sm:w-4">
          <svg
            enableBackground="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="256" cy="256" fill="#f0f0f0" r="256" />
            <path
              d="m345.043 256c0 22.261-39.866 77.913-89.043 77.913s-89.043-55.652-89.043-77.913c0-49.178 39.866-89.043 89.043-89.043s89.043 39.865 89.043 89.043z"
              fill="#d80027"
            />
            <path
              d="m345.043 256c0 49.178-39.866 89.043-89.043 89.043s-89.043-39.865-89.043-89.043"
              fill="#0052b4"
            />
            <path
              d="m353.427 319.639h33.391v22.261h-33.391z"
              transform="matrix(.707 -.707 .707 .707 -125.483 358.596)"
            />
            <path
              d="m314.07 358.994h33.391v22.261h-33.391z"
              transform="matrix(.707 -.707 .707 .707 -164.839 342.294)"
            />
            <path
              d="m400.656 366.851h33.391v22.261h-33.391z"
              transform="matrix(.707 -.707 .707 .707 -145.034 405.821)"
            />
            <path
              d="m361.299 406.213h33.391v22.261h-33.391z"
              transform="matrix(.707 -.707 .707 .707 -184.394 389.52)"
            />
            <path
              d="m377.04 343.247h33.391v22.261h-33.391z"
              transform="matrix(.707 -.707 .707 .707 -135.26 382.208)"
            />
            <path
              d="m337.694 382.602h33.391v22.261h-33.391z"
              transform="matrix(.707 -.707 .707 .707 -174.613 365.913)"
            />
            <path
              d="m329.544 126.805h89.043v22.261h-89.043z"
              transform="matrix(-.707 -.707 .707 -.707 541.034 499.974)"
            />
            <path
              d="m314.081 130.749h33.391v22.26h-33.391z"
              transform="matrix(-.707 -.707 .707 -.707 464.348 476.098)"
            />
            <path
              d="m353.427 170.098h33.391v22.26h-33.391z"
              transform="matrix(-.707 -.707 .707 -.707 503.692 571.091)"
            />
            <path
              d="m361.282 83.526h33.391v22.261h-33.391z"
              transform="matrix(-.707 -.707 .707 -.707 578.316 428.859)"
            />
            <path
              d="m400.651 122.879h33.391v22.261h-33.391z"
              transform="matrix(-.707 -.707 .707 -.707 617.695 523.876)"
            />
            <path
              d="m69.81 386.542h89.043v22.261h-89.043z"
              transform="matrix(.707 .707 -.707 .707 314.684 35.631)"
            />
            <path
              d="m140.919 382.6h33.391v22.26h-33.391z"
              transform="matrix(.707 .707 -.707 .707 324.573 3.87)"
            />
            <path
              d="m101.569 343.252h33.391v22.261h-33.391z"
              transform="matrix(.707 .707 -.707 .707 285.225 20.171)"
            />
            <path
              d="m117.031 339.316h89.043v22.261h-89.043z"
              transform="matrix(.707 .707 -.707 .707 295.121 -11.592)"
            />
            <path
              d="m69.81 103.201h89.043v22.261h-89.043z"
              transform="matrix(-.707 .707 -.707 -.707 276.02 114.331)"
            />
            <path
              d="m93.412 126.806h89.043v22.261h-89.043z"
              transform="matrix(-.707 .707 -.707 -.707 333.003 137.938)"
            />
            <path
              d="m117.038 150.428h89.043v22.26h-89.043z"
              transform="matrix(-.707 .707 -.707 -.707 390.037 161.557)"
            />
          </svg>
        </div>
        <ListboxLabel>한국어</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="it" key="it">
        <div className="w-5 sm:w-4">
          <svg
            enableBackground="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="256" cy="256" fill="#f0f0f0" r="256" />
            <path
              d="m512 256c0-110.071-69.472-203.906-166.957-240.077v480.155c97.485-36.172 166.957-130.007 166.957-240.078z"
              fill="#d80027"
            />
            <path
              d="m0 256c0 110.071 69.472 203.906 166.957 240.077v-480.154c-97.485 36.171-166.957 130.006-166.957 240.077z"
              fill="#6da544"
            />
          </svg>
        </div>
        <ListboxLabel>IT</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="bn" key="bn">
        <div className="w-5 sm:w-4">
          <svg
            enableBackground="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="256" cy="256" fill="#496e2d" r="256" />
            <circle cx="200.348" cy="256" fill="#d80027" r="111.304" />
          </svg>
        </div>
        <ListboxLabel>BN</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="zh" key="zh">
        <div className="w-5 sm:w-4">
          <svg
            enableBackground="new -49 141 512 512"
            viewBox="-49 141 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="207" cy="397" fill="#d80027" r="256" />
            <g fill="#ffda44">
              <path d="m91.1 296.8 22.1 68h71.5l-57.8 42.1 22.1 68-57.9-42-57.9 42 22.2-68-57.9-42.1h71.5z" />
              <path d="m254.5 537.5-16.9-20.8-25 9.7 14.5-22.5-16.9-20.9 25.9 6.9 14.6-22.5 1.4 26.8 26 6.9-25.1 9.6z" />
              <path d="m288.1 476.5 8-25.6-21.9-15.5 26.8-.4 7.9-25.6 8.7 25.4 26.8-.3-21.5 16 8.6 25.4-21.9-15.5z" />
              <path d="m333.4 328.9-11.8 24.1 19.2 18.7-26.5-3.8-11.8 24-4.6-26.4-26.6-3.8 23.8-12.5-4.6-26.5 19.2 18.7z" />
              <path d="m255.2 255.9-2 26.7 24.9 10.1-26.1 6.4-1.9 26.8-14.1-22.8-26.1 6.4 17.3-20.5-14.2-22.7 24.9 10.1z" />
            </g>
          </svg>
        </div>
        <ListboxLabel>中文</ListboxLabel>
      </ListboxOption>
    </Listbox>
  );
};
