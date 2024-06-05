## Build a custom Angular application for labeling jobs with Amazon SageMaker Ground Truth

As a data scientist attempting to solve a problem using supervised learning, you usually need a high-quality labeled dataset before starting your model building. Amazon SageMaker Ground Truth makes dataset building for a different range of tasks, like text classification and object detection, easier and more accessible to everyone.

Ground Truth also helps you build datasets for custom user-defined tasks that let you annotate anything. This capability is powered by the following:

* Custom [AWS Lambda](https://aws.amazon.com/lambda/) functions that can be triggered between labeling steps. This allows you to have custom logic pre-labeling like filtering examples or augmenting them with metadata using other services like [Amazon Translate](https://aws.amazon.com/translate/) or [Amazon Rekognition](https://aws.amazon.com/rekognition/), and post-labeling logic for label consolidation or quality control.
* Custom web templates that let you build unique user interfaces using HTML and Javascript that integrate perfectly with Ground Truth workflows. These templates are easy to build with [Crowd HTML Elements](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-ui-template-reference.html), which are a set of common UI elements used for text, video, and audio labeling jobs that you can arrange like blocks in your custom template.
* Availability of a large set of skilled and specialized workforces in the [AWS Marketplace](https://aws.amazon.com/partners/aws-marketplace/) and in [Amazon Mechanical Turk](https://requester.mturk.com/create/projects/new) if you need to augment your private teams of subject matter experts. Vetted partners in the AWS Marketplace cover numerous languages as well as specific skills in video and image annotations that fit different industry needs (like medical labeling).

For complex labeling tasks, such as complex taxonomy classification, extreme multi-class classifications, or autonomous driving labeling tasks, you may need to build a more complex front-end application for your labeling workforce. Front-end frameworks like Angular are helpful in these cases because they bring useful design patterns like model-view-controller (MVC), which makes your codebase more robust and maintainable for a larger team composed of UX/UI designers and software developers.

This post walks you through using Angular and [Angular Elements](https://angular.io/guide/elements) to create fully customizable solutions that work nicely with Ground Truth. This walkthrough assumes that you’re familiar with running a custom labeling job with Ground Truth and Crowd HTML Elements. For more information, see [Build a custom data labeling workflow with Amazon SageMaker Ground Truth](https://aws.amazon.com/blogs/machine-learning/build-a-custom-data-labeling-workflow-with-amazon-sagemaker-ground-truth/).

The approach described in this post also works with [Amazon Augmented AI](https://aws.amazon.com/augmented-ai/) (Amazon A2I), which makes it easy to build the workflows required for human review of machine learning predictions. This is possible because Amazon A2I uses Crowd HTML Elements to create custom worker templates. For more information, see [Create Custom Worker Templates](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-custom-templates.html).


#### How to run this custom angular app template:
- Install Node, NPM Package Manager

- Clone repository and install pre-requisites

    ```
    git clone https://github.com/aws-samples/sagemaker-groundtruth-custom-angular-app-template.git
    cd sagemaker-groundtruth-custom-angular-app-template
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
