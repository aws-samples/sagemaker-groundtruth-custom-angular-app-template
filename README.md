## Build a custom Angular application for labeling jobs with Amazon SageMaker Ground Truth

Data Scientists usually needs a high quality labeled data set before they start their model building when they are attempting to solve a problem using supervised learning. Amazon SageMaker Ground Truth makes dataset building for a different range of tasks like Text Classification and Object detection easier and accessible to everyone.

SageMaker Ground Truth also helps you build datasets for custom user-defined tasks, that let customers annotate literally anything. This capability is powered by the flexibility to define:

* Custom Lambda functions that can be triggered in between labeling steps. This allows you to have custom logic “pre labeling” like filtering examples or augmenting them with meta data using other services like Amazon Translate or Amazon Rekognition and “post labeling” logic for label consolidation or quality control.
* Custom web templates that let’s you build unique user interfaces using HTML and Javascript that intergrates perfectly with SageMaker Ground Truth workflows. These templates are easy to build with SageMaker Ground Truth crowd HTML elements (https://docs.aws.amazon.com/sagemaker/latest/dg/sms-ui-template-reference.html), which are a set of common UI elements used for text, video and audio labeling jobs that you can arrange like blocks in your custom template.
* Availability of a large set of skilled and specialized workforces in the Marketplace and in Amazon Mechanical Turk if you need to augment your private teams of SMEs. Vetted partners in the Marketplace covers more and more languages as well as specific skills in video and image annotations that fits different industry needs (like medical labeling).

For complex labeling tasks like complex taxonomy classification, extreme multi-class classifications or autonomous driving labeling tasks you may need a to build a more complex front-end application for your labeling workforce. Front-end frameworks like Angular are helpful in these cases as they bring useful design patterns like MVC (model-view-controller) making your codebase more robust and maintainable for a larger team composed of both UX/UI Designers and Software Developers.

This blog post walks you through using Angular, especially Angular Elements, to create fully customisable solutions that work nicely with SageMaker Ground Truth. This walk-through assumes that you are familiar with running a custom labeling job with Amazon Ground Truth crowd HTML elements. For more information, see Build a custom data labeling workflow with Amazon SageMaker Ground Truth (https://aws.amazon.com/blogs/machine-learning/build-a-custom-data-labeling-workflow-with-amazon-sagemaker-ground-truth/).


#### How to run this custom angular app template:
- Install Node, NPM Package Manager

- Clone repository and install pre-requisites

    ```
    git clone https://github.com/enissay14/sagemaker-groundtruth-custom-angular-app.git
    cd sagemaker-groundtruth-custom-angular-app
    npm install
    ```
- Run the app locally
  ```
  ng serve
  ```
- Build the app
  ```
  ng build
  ```
- After building the app:
    1) Make sure to change CSS and JS URLs to point to your S3 urls in `dist\index.html`: replace script tags like `<script src="runtime-es2015.js" type="module"></script>` to `<script src="<your-static-s3-bucket>/runtime-es2015.js" type="module"></script>`
    2) Copy content of `dist/index.html` as a template while launching a Ground Truth job.


## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
