import { Client } from "../utils/prismicHelpers";
import SliceZone from "next-slicezone";

// import Layout from "./../components/Layout";
import * as Slices from "../slices";
const resolver = ({ sliceName }) => Slices[sliceName];

const Home = (props) => {
  console.log(props.slices.body);
  return (
    <div className="bg-black min-h-screen text-white container mx-auto">
      <div>
   
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto py-5">
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
              <div class="flex flex-col  border rounded-lg overflow-hidden">
                <a
                  href="#"
                  class="group h-48 md:h-64 block bg-gray-500 overflow-hidden relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />
                </a>

                <div class="flex flex-col flex-1 p-4 sm:p-6">
                  <h2 class=" text-lg font-semibold mb-2">
                    <a
                      href="#"
                      class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    >
                      New trends in Tech
                    </a>
                  </h2>

                  <p class="text-xl mb-8">
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text.
                  </p>

                  <div class="flex  justify-between items-end mt-auto">
                    <div class="flex items-center gap-2">
                      <div class="w-10 h-10 shrink-0 bg-gray-500 rounded-full overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                          loading="lazy"
                          alt="Photo by Brock Wegner"
                          class="w-full h-full object-cover object-center"
                        />
                      </div>

                      <div>
                        <span class="block text-indigo-500">Mike Lane</span>
                        <span class="block text-gray-400 text-sm">
                          July 19, 2021
                        </span>
                      </div>
                    </div>

                    <span class=" text-sm border rounded px-2 py-1">
                      Article
                    </span>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

      <SliceZone slices={props.slices.body} resolver={resolver} />
    </div>
  );
};

export async function getStaticProps() {
  const doc = (await Client().getSingle("home_page")) || null;
  console.log(doc.data);
  return {
    props: {
      slices: doc.data,
    },
  };
}

export default Home;
