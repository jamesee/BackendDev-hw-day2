import * as React from "react";
import { useState,  useRef } from "react";

export const CommentForm = (props) => {

    const { movieId, addItem} = props;
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(3);

    const contentInputRef = useRef();
  
    const handleSubmit = event => {
      event.preventDefault();
  
      if (!content) return;

      addItem({
          "rating": rating,
          "movieId": movieId,
          "content": content
      })
  
      //   setContent("");
      //   setRating(Number(3));

      //   if (contentInputRef.current) {
      //     contentInputRef.current.focus();
      //   }
      // });
    }

  
    return (
  
      <form onSubmit={handleSubmit}>
        <div className="
                bg-white
                overflow-hidden
                shadow
                rounded-lg
                divide-y divide-gray-200
              ">
          <div className="px-4 py-5 sm:px-6 text-xl text-pink-600 font-bold">Add comment</div>
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-5">
  
  
              <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                <label htmlFor="job-summary" className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        sm:mt-px sm:pt-2
                      ">
                  Comment
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea id="job-summary" name="summary" rows="4" className="
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          focus:ring-pink-500 focus:border-pink-500
                          border border-gray-300
                          rounded-md
                        "
                    value={content}
                    onChange={(ev) => setContent(ev.target.value)}
                    required
                    ref={contentInputRef}
                  />
                </div>
              </div>

              <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                <label htmlFor="job-level" className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        sm:mt-px sm:pt-2
                      ">
                  Rating
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <select id="job-level" name="level" className="
                          block
                          w-full
                          pl-3
                          pr-10
                          py-2
                          text-base
                          border-gray-300
                          focus:outline-none
                          focus:ring-pink-500
                          focus:border-pink-500
                          sm:text-sm
                          rounded-md
                        "
                    value={rating}
                    onChange={(ev) => setRating(Number(ev.target.value))}
                  >
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    

                  </select>
                </div>
              </div>


            </div>
          </div>

          <div className="px-4 py-4 space-x-4 sm:px-6 text-right">
            <button className="
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-pink-600
                    hover:bg-pink-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-pink-500
                  "
              id="submit-btn"
            >
              ADD
            </button>
          </div>

        </div>
      </form>
  
    )
  };