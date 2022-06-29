var pathSum = function(root, targetSum) {
    if (!root) {
        return 0;
    }
    
    let ans = 0;

    function traverse(node, sum) {
        if (!node) {
            return;
        }

        if (node.val === sum) {
            ans++;
        }
        
        sum -= node.val
        
        traverse(node.left, sum);
        traverse(node.right, sum);
    }
    
    traverse(root, targetSum);
    
    ans += pathSum(root.left, targetSum);
    ans += pathSum(root.right, targetSum);
    
    return ans;
};