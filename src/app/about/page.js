import React from "react";

const page = () => {
  return (
    <>
      <section className="py-4 px-20 flex flex-col-reverse md:flex-row gap-6 md:justify-center">
        <div className="w-full md:w-1/2 space-y-8">
        <div className="w-full text-center">
          <h1 className="text-3xl w-fit text-gray-800  shadow-[0_4px#ff0000]">About Us</h1>
        </div>
          <p className="text-gray-800">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eleifend dui sit amet est tempor, eu facilisis neque semper. Vivamus
            eu enim maximus, auctor turpis et, finibus felis. Donec dapibus dui
            vel imperdiet volutpat. Duis dignissim, nibh sed consectetur ornare,
            velit mauris varius est, non rutrum purus sapien id enim. Duis
            tortor neque, pretium non vehicula eu, luctus at mauris. Mauris quis
            mauris vitae leo pretium fringilla. Curabitur laoreet arcu tincidunt
            erat pulvinar, a condimentum felis auctor. Aliquam erat volutpat.
            Maecenas ut quam facilisis, vehicula erat vel, suscipit nulla.
            <br />
            <br />
            Quisque at pretium neque. Fusce ac nunc felis. Nullam faucibus
            semper malesuada. Vivamus fermentum sem sed orci congue elementum.
            Ut gravida porttitor augue, sit amet dapibus sapien accumsan
            tincidunt. Integer tristique et nisl in faucibus. Morbi vehicula
            velit sed nulla gravida accumsan. Vivamus a lacus nec dolor iaculis
            feugiat id condimentum erat. In diam magna, laoreet ac consequat ac,
            tincidunt vitae velit.
            <br />
            <br />
            Donec aliquet, nulla eget commodo semper, mauris nisl rhoncus eros,
            vitae ultrices dui dui at ipsum. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Etiam egestas
            volutpat finibus. Nam volutpat, enim nec ullamcorper euismod, justo
            nisi tempor diam, nec vestibulum dui massa sit amet felis. Maecenas
            rhoncus nulla odio, non vehicula justo cursus et. Mauris venenatis
            nisl at augue rhoncus facilisis. Praesent dapibus, tortor non varius
            facilisis, nibh orci tempor dui, sit amet dictum nisl elit vitae
            nibh. Vestibulum molestie vehicula mauris, sit amet vehicula mi
            imperdiet at. Praesent ut mauris vel diam feugiat accumsan. Morbi
            non vulputate felis, non venenatis libero. Pellentesque sit amet mi
            eget est gravida scelerisque vel at eros. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Sed faucibus dolor non
            tellus varius molestie. Phasellus sollicitudin libero nec metus
            interdum scelerisque. Maecenas id pharetra risus, a mattis justo.{" "}
          </p>
        </div>
        <div
          className="w-full h-[300px] md:h-auto md:w-1/2"
          style={{ backgroundImage: "url(/banner.jpeg)" }}
        ></div>
      </section>
    </>
  );
};

export default page;
